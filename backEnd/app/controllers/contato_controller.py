from flask import Blueprint, request, jsonify

bp = Blueprint('contato', __name__, url_prefix='/api')


@bp.route('/contato', methods=['POST'])
def enviar_contato():
    data = request.json
    try:

        return jsonify({
            "message": "Mensagem enviada com sucesso!",
            "data": data
        }), 201
    except Exception as e:
        return jsonify({
            "error": "Erro ao enviar mensagem",
            "details": str(e)
        }), 400
    