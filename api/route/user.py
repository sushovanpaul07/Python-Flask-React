from flask import Blueprint, Response, request ,jsonify
from model.user import findUserByFirstName,findUserByLastName,findUserByPhone,deleteUsers,findAllUsers,createUser, updateUser ,findUserByEmail
# users = Blueprint('api/v1/users', __name__)
from route import app

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
print("app",app)

@app.route("/sendMail")
def index():
    isOk, user = findAllUsers()
    if not isOk:
        return "users not found"
    
    for i in user:
        print(i.email)
        message = Mail(
            from_email='virtual.classroom.app2022@gmail.com',
            to_emails=i.email,
            subject='Mail from Task',
            html_content='<strong>'+i.message.text+'</strong>')
        try:
            sg = SendGridAPIClient(
                '<put the key here>')
            response = sg.send(message)

        except Exception as e:
            print(e.message)
            return e.message
    return "done"



@app.route('/user')
def get_all_user():
    isOk , user = findAllUsers()
    print(user)
    return user.to_json()


@app.route('/user/<email>', methods=['DELETE'])
def delete_user(email):
    isOk, message = deleteUsers(email)
    return message



@app.route('/getUser', methods=['POST'])
def get_user():
    body = request.get_json()
    isOk = False
    print(body)
    print("is present",("email" in body))
    if "email" in body:
        isOk , user = findUserByEmail(body["email"])
    elif "phone" in body:
        isOk, user = findUserByPhone(body["phone"])
    elif "first_name" in body:
        isOk , user = findUserByFirstName(body["first_name"])
    elif "last_name" in body:
        isOk , user = findUserByLastName(body["last_name"])
    if isOk:
        print(user)
        return user.to_json()
    return ""
    
    

@app.route('/user', methods=['POST'])
def add_user():
    body = request.get_json()
    isOk , message = createUser(body["first_name"],body["last_name"],body["email"],body["phone"],body["message"])
    
    if isOk:
        return message
    return message



@app.route('/user/<email>', methods=['PUT'])
def update_user(email):
    print("updating user")
    body = request.get_json()
    isOk, message = updateUser(email,body["first_name"],
                               body["last_name"], body["email"], body["phone"], body["message"])
    
    if isOk:
        return message
    return message



