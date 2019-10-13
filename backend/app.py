import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder="./template")
cors = CORS(app)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Lawyer, User


@app.route("/")
def index():
    return ''

@app.route("/addLawyer", methods=['POST'])
def add_lawyer():
    print(request.json['user'])
    nome = request.json['user']['nome']
    rua = request.json['user']['rua']
    bairro = request.json['user']['bairro']
    cep = request.json['user']['CEP']
    cidade = request.json['user']['cidade']
    telefone = request.json['user']['telefone']
    cpf = request.json['user']['cpf']
    area = request.json['user']['area']
    numOAB = request.json['user']['numOAB']
    escritorio = request.json['user']['escritorio']
    cidadeEscritorio = request.json['user']['cidadeEscritorio']
    desc = request.json['user']['desc']
    
    try:
        lawyer=Lawyer(
            nome=nome,
            rua=rua,
            bairro=bairro,
            cep=cep,
            cidade=cidade,
            telefone=telefone,
            cpf=cpf,
            area=area,
            numOAB=numOAB,
            escritorio = escritorio,
            cidadeEscritorio = cidadeEscritorio,
            desc = desc
        )
        print(lawyer)
        db.session.add(lawyer)
        db.session.commit()
        return "Lawyer added. Lawyer id={}".format(lawyer.id)
    except Exception as e:
	    return(str(e))

@app.route("/getallLawyer")
def get_all():
    try:
        lawyer=Lawyer.query.all()
        return  jsonify([e.serialize() for e in lawyer])
    except Exception as e:
	    return(str(e))


@app.route("/getLawyer/<area>", methods=['PUT'])
def get_by_area(area):
    try:
        print(area)
        lawer=Lawyer.query.filter_by(area=area)
        return  jsonify([e.serialize() for e in lawer])
    except Exception as e:
	    return(str(e))


@app.route("/addUser", methods=['POST'])
def add_user():
    print(request.json['user'])
    nome = request.json['user']['nome']
    rua = request.json['user']['rua']
    bairro = request.json['user']['bairro']
    cep = request.json['user']['CEP']
    cidade = request.json['user']['cidade']
    cpf=request.json['user']['cpf']
    
    try:
        user=User(
            nome=nome,
            rua=rua,
            bairro=bairro,
            cep=cep,
            cidade=cidade,
            cpf=cpf,
        )
        db.session.add(user)
        db.session.commit()
        return "User added. User id={}".format(user.id)
    except Exception as e:
	    return(str(e))

@app.route("/getallUser")
def get_all_user():
    try:
        user=User.query.all()
        return  jsonify([e.serialize() for e in user])
    except Exception as e:
	    return(str(e))

@app.route("/get/<nome>")
def get_by_nome(nome):
    try:
        user=User.query.filter_by(nome=nome)
        return  jsonify([e.serialize() for e in lawer])
    except Exception as e:
	    return(str(e))