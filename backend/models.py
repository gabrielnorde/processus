from app import db

class Lawyer(db.Model):
    __tablename__ = 'prj'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String())
    rua = db.Column(db.String())
    bairro = db.Column(db.String())
    numero = db.Column(db.String())
    cep = db.Column(db.String())
    cidade = db.Column(db.String())
    telefone = db.Column(db.String())
    cpf = db.Column(db.String())
    area = db.Column(db.String())
    numOAB = db.Column(db.String())
    escritorio = db.Column(db.String())
    cidadeEscritorio = db.Column(db.String())
    desc = db.Column(db.String())

    def __init__(self, nome, rua, bairro, numero, cep, cidade, telefone,
                cpf,area,numOAB, escritorio, cidadeEscritorio, desc):
        self.nome = nome
        self.rua = rua
        self.bairro = bairro
        self.numero = numero
        self.cep = cep
        self.cidade = cidade
        self.telefone = telefone
        self.cpf = cpf
        self.area = area
        self.numOAB = numOAB
        self.escritorio = escritorio
        self.cidadeEscritorio = cidadeEscritorio
        self.desc = desc

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id, 
            'nome': self.nome,
            'rua': self.rua,
            'bairro': self.bairro,
            'numero' : self.numero
            'cep': self.cep,
            'cidade': self.cidade,
            'telefone': self.telefone,
            'cpf': self.cpf,
            'area': self.area,
            'numOAB': self.numOAB,
            'escritorio': self.escritorio,
            'cidadeEscritorio': self.cidadeEscritorio,
            'desc': self.desc
        }


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String())
    rua = db.Column(db.String())
    bairro = db.Column(db.String())
    numero = db.Column(db.String())
    cep = db.Column(db.String())
    cidade = db.Column(db.String())
    cpf = db.Column(db.String())

    def __init__(self, nome, rua, bairro, cep, cidade, cpf):
        self.nome = nome
        self.rua = rua
        self.bairro = bairro
        self.numero = numero
        self.cep = cep
        self.cidade = cidade
        self.cpf = cpf

    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id, 
            'nome': self.nome,
            'rua': self.rua,
            'bairro': self.bairro,
            'numero': self.numero,
            'cep': self.cep,
            'cidade': self.cidade,
            'cpf': self.cpf,
        }