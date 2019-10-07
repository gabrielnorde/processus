import os
from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder="./template")

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Lawer, User


@app.route("/")
def index():
    return render_template('bundle.js')

@app.route("/addLawyer")
def add_lawyer():
    nome=request.args.get('nome')
    rua=request.args.get('rua')
    bairro=request.args.get('bairro')
    cep=request.args.get('cep')
    cidade=request.args.get('cidade')
    telefone=request.args.get('telefone')
    cpf=request.args.get('cpf')
    area=request.args.get('area')
    numOAB=request.args.get('numOAB')
    
    try:
        lawer=Lawer(
            nome=nome,
            rua=rua,
            bairro=bairro,
            cep=cep,
            cidade=cidade,
            telefone=telefone,
            cpf=cpf,
            area=area,
            numOAB=numOAB

        )
        db.session.add(lawer)
        db.session.commit()
        return "Lawyer added. Lawyer id={}".format(lawer.id)
    except Exception as e:
	    return(str(e))

@app.route("/getallLawyer")
def get_all():
    try:
        lawyer=Lawer.query.all()
        return  jsonify([e.serialize() for e in lawyer])
    except Exception as e:
	    return(str(e))


@app.route("/get/<area>")
def get_by_area(area):
    try:
        lawer=Lawer.query.filter_by(area=area)
        return  jsonify([e.serialize() for e in lawer])
    except Exception as e:
	    return(str(e))


@app.route("/addUser")
def add_user():
    nome=request.args.get('nome')
    rua=request.args.get('rua')
    bairro=request.args.get('bairro')
    cep=request.args.get('cep')
    cidade=request.args.get('cidade')
    cpf=request.args.get('cpf')
    
    try:
        user=User(
            nome=nome,
            rua=rua,
            bairro=bairro,
            cep=cep,
            cidade=cidade,
            cpf=cpf
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