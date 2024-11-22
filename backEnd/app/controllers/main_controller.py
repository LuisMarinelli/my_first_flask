from flask import Blueprint, jsonify, render_template

bp = Blueprint('main', __name__)


@bp.route('/')
def home():
    return render_template('home/home.html')


@bp.route('/about')
def about():
    return render_template('about/about.html')


@bp.route('/api/produtos')
def get_produtos():
    produtos = [
        {'id': 1, 'nome': 'Produto 1', 'preco': 99.99},
        {'id': 2, 'nome': 'Produto 2', 'preco': 149.99}
    ]
    return jsonify(produtos)


@bp.route('/produtos')
def produtos():  
    produtos = [
        {
            'nome': 'Produto 1',
            'preco': 99.99,
            'em_estoque': True
        },
        {
            'nome': 'Produto 2',
            'preco': 149.99,
            'em_estoque': False
        }
    ]
    return render_template(
        'produtos/produtos.html',
        produtos=produtos,
        titulo="Nossa Lista de Produtos"
    )
