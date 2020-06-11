import json
import boto3
from boto3.dynamodb.conditions import Key

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('objectDetection')
    requestedData = event["tags"]
    responseFromDb = table.scan()
    myList = []
    for key in responseFromDb["Items"]:
        for data in requestedData:
            if data in key["objectDetected"]:
                myList.append(key["imageURL"])
                break
    links = {"links": myList}
    return {
        'statusCode': 200,
        'body': links
    }