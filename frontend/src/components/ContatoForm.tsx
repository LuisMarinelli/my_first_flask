import React, { useState } from 'react';

interface ContatoForm {
    nome: string;
    email: string;
    mensagem: string;
}

const ContatoForm: React.FC = () => {
    const [form, setForm] = useState<ContatoForm>({
        nome: '',
        email: '',
        mensagem: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessage('Mensagem enviada com sucesso!');
                setForm({ nome: '', email: '', mensagem: '' });
            } else {
                throw new Error(data.error || 'Erro ao enviar mensagem');
            }
        } catch (error) {
            setMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
            
            {message && (
                <div className={`p-4 mb-4 rounded ${
                    message.includes('sucesso') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Nome</label>
                    <input
                        type="text"
                        value={form.nome}
                        onChange={e => setForm({...form, nome: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Mensagem</label>
                    <textarea
                        value={form.mensagem}
                        onChange={e => setForm({...form, mensagem: e.target.value})}
                        className="w-full p-2 border rounded"
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-2 text-white rounded ${
                        loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                >
                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </form>
        </div>
    );
};

export default ContatoForm;