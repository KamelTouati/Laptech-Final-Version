from rest_framework.response import Response
import pickle
import pandas as pd


def predictPrice(request):
    data = request.data
    try:
        with open('model.pkl', 'rb') as file:
            loaded_model = pickle.load(file)
    except FileNotFoundError:
        print("Error: 'model.pkl' file not found.")
    except PermissionError:
        print("Error: Permission denied while trying to open 'model.pkl'.")
    new_data = getValues(data)
    price_euro = round(loaded_model.predict([new_data])[0], 2)
    result = price_euro * 210
    return Response(f'{result}')


def getValues(data):
    companies = pd.read_csv('Data/Companies.csv')
    cpus = pd.read_csv('Data/CPUs.csv')
    gpus = pd.read_csv('Data/GPUs.csv')
    memoTypes = pd.read_csv('Data/Memo_Types.csv')
    oprSys = pd.read_csv('Data/OpSys.csv')
    screenResolutions = pd.read_csv('Data/ScreenResolutions.csv')
    typeNames = pd.read_csv('Data/TypeNames.csv')

    companies.set_index('Company', inplace=True)
    cpus.set_index('Cpu', inplace=True)
    gpus.set_index('Gpu', inplace=True)
    memoTypes.set_index('Memo_Type', inplace=True)
    oprSys.set_index('OpSys', inplace=True)
    screenResolutions.set_index('ScreenResolution', inplace=True)
    typeNames.set_index('TypeName', inplace=True)

    result = [companies.loc[data['company']].Value, typeNames.loc[data['typeName']].Value, data['inches'], screenResolutions.loc[data['resolution']].Value, cpus.loc[data['cpu']].Value,
              data['ram'], gpus.loc[data['gpu']].Value, oprSys.loc[data['opSystem']
                                                                   ].Value, data['weight'], memoTypes.loc[data['memoType']].Value,
              data['memoSize']]

    return result
