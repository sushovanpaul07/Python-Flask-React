from mongoengine import Document, StringField, EmailField, IntField, EmbeddedDocumentField, EmbeddedDocument, DynamicField

from mongoengine.errors import NotUniqueError


class Embed(EmbeddedDocument):
    text = StringField()


class User(Document):
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    email = EmailField(required=True, unique=True)
    phone = IntField(required=True)
    message = EmbeddedDocumentField(Embed)


def createUser(_first_name, _last_name, _email,  _phone, _message):
    try:
        user = User(email=_email)
        embededMessage = Embed(text=_message)
        user.first_name = _first_name
        user.last_name = _last_name
        user.phone = _phone
        user.message = embededMessage
        user.save()
        return True , "User Added Successfuly"
    except NotUniqueError as e:
        return False, "user Creation Failed"


def updateUser(email,_first_name, _last_name, _email,  _phone, _message):
    try:
        user = User.objects(email=email).update_one(set__first_name=_first_name, set__last_name=_last_name, set__email=_email, set__phone=_phone, set__message__text=_message)
        return True, "User Updated Successfuly"
    except NotUniqueError as e:
        return False, "user Updation Failed"

def findAllUsers():
    try:
        user = User.objects()
        return True, user
    except Exception as e:
        return False, "Failed to find Users"


def findUserByEmail(_email):
    try:
        user = User.objects(email=_email)
        return True , user
    except Exception as e:
        return False, "Failed to find Users by email"


def findUserByPhone(_phone):
    try:
        user = User.objects(phone=_phone)
        return True , user
    except Exception as e:
        return False, "Failed to find Users by phone"


def findUserByFirstName(_name):
    try:
        user = User.objects(first_name__contains=_name)
        print(user)
        
        return True , user
    except Exception as e:
        return False, "Failed to find Users by firstName"


def findUserByLastName(_name):
    try:
        user = User.objects(last_name__contains=_name)
        print(user)

        return True, user
    except Exception as e:
        return False, "Failed to find Users by lastName"


def deleteUsers(_email):
    try:
        User.objects(email=_email).delete()
        return True, "User Deleted Successfully"
    except Exception as e:
        return False, "Failed to find Users"
