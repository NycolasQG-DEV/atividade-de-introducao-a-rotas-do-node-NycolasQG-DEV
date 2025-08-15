const http = require('http');
const porta = 3000

const server = http.createServer((req, res) => {
    
    //Mostra a rota solicitada
    url = req.url
    console.log('url: ',url);

    //Aqui vão as Rotas
    if(url === '/') {
        res.writeHead(200,'ok',{ 'Content-Type': 'text/html; charset=utf-8' }) 
        res.end(`
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
            <div style="
                background: white;
                border-radius: 20px;
                padding: 30px;
                max-width: 420px;
                width: 90%;
                text-align: center;
                box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                font-family: 'Montserrat', sans-serif;
                margin: auto;
                animation: fadeIn 0.8s ease-in-out;
            ">
                <h1 style="
                    margin-bottom: 10px;
                    font-size: 2rem;
                    font-weight: 800;
                    color: #ff4d4d;
                ">Mercadinho da Juju 🛒</h1>
                <p style="
                    font-size: 1rem;
                    color: #555;
                    margin-bottom: 25px;
                ">Bem-vindo(a)! 🌟 Aqui você encontra tudo fresquinho e selecionado com muito carinho para o seu dia ficar mais saboroso. 💖</p>
                <ul style="list-style:none; padding:0; margin:0;">
                    <li style="margin: 10px 0;">
                        <a href="http://localhost:3000/verduras" style="
                            display: block;
                            padding: 12px;
                            background: #28a745;
                            color: white;
                            text-decoration: none;
                            font-weight: 600;
                            border-radius: 10px;
                            transition: all 0.3s ease;
                            font-size: 1.05rem;
                        ">🥬 Verduras</a>
                    </li>
                    <li style="margin: 10px 0;">
                        <a href="http://localhost:3000/frutas" style="
                            display: block;
                            padding: 12px;
                            background: #ff9800;
                            color: white;
                            text-decoration: none;
                            font-weight: 600;
                            border-radius: 10px;
                            transition: all 0.3s ease;
                            font-size: 1.05rem;
                        ">🍎 Frutas</a>
                    </li>
                    <li style="margin: 10px 0;">
                        <a href="http://localhost:3000/carnes" style="
                            display: block;
                            padding: 12px;
                            background: #e53935;
                            color: white;
                            text-decoration: none;
                            font-weight: 600;
                            border-radius: 10px;
                            transition: all 0.3s ease;
                            font-size: 1.05rem;
                        ">🥩 Carnes</a>
                    </li>
                    <li style="margin: 10px 0;">
                        <a href="http://localhost:3000/bebidas" style="
                            display: block;
                            padding: 12px;
                            background: #2196f3;
                            color: white;
                            text-decoration: none;
                            font-weight: 600;
                            border-radius: 10px;
                            transition: all 0.3s ease;
                            font-size: 1.05rem;
                        ">🥤 Bebidas</a>
                    </li>
                </ul>
            </div>
        `);
   } 
    else if(url === '/verduras'){ 
    res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <div style="
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 420px;
        width: 90%;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        font-family: 'Montserrat', sans-serif;
        margin: auto;
    ">
        <h1 style="color:#28a745; font-weight:800;">🥬 Verduras</h1>
        <ul style="list-style:none; padding:0; margin:0; font-size:1.05rem; font-weight:600; color:#333;">
            <li style="margin:8px 0;">Alface</li>
            <li style="margin:8px 0;">Rúcula</li>
        </ul>
        <a href="http://localhost:3000/">Voltar</a>
    </div>
    `);
}
else if(url === '/frutas'){ 
    res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <div style="
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 420px;
        width: 90%;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        font-family: 'Montserrat', sans-serif;
        margin: auto;
    ">
        <h1 style="color:#ff9800; font-weight:800;">🍎 Frutas</h1>
        <ul style="list-style:none; padding:0; margin:0; font-size:1.05rem; font-weight:600; color:#333;">
            <li style="margin:8px 0;">Maçã</li>
            <li style="margin:8px 0;">Banana</li>
            <li style="margin:8px 0;">Laranja</li>
        </ul>
        <a href="http://localhost:3000/">Voltar</a>
    </div>
    `);
}
else if(url === '/carnes'){ 
    res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <div style="
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 420px;
        width: 90%;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        font-family: 'Montserrat', sans-serif;
        margin: auto;
    ">
        <h1 style="color:#e53935; font-weight:800;">🥩 Carnes</h1>
        <ul style="list-style:none; padding:0; margin:0; font-size:1.05rem; font-weight:600; color:#333;">
            <li style="margin:8px 0;">Frango</li>
            <li style="margin:8px 0;">Carne bovina</li>
            <li style="margin:8px 0;">Peixe</li>
        </ul>
        <a href="http://localhost:3000/">Voltar</a>
    </div>
    `);
}
else if(url === '/bebidas'){ 
    res.writeHead(200, 'ok', { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <div style="
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 420px;
        width: 90%;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        font-family: 'Montserrat', sans-serif;
        margin: auto;
    ">
        <h1 style="color:#2196f3; font-weight:800;">🥤 Bebidas</h1>
        <ul style="list-style:none; padding:0; margin:0; font-size:1.05rem; font-weight:600; color:#333;">
            <li style="margin:8px 0;">Água</li>
            <li style="margin:8px 0;">Suco de laranja</li>
            <li style="margin:8px 0;">Refrigerante</li>
        </ul>
        <a href="http://localhost:3000/">Voltar</a>
    </div>
    `);
}
else {
    res.writeHead(404, 'Página não encontrada', { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <div style="
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 420px;
        width: 90%;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        font-family: 'Montserrat', sans-serif;
        margin: auto;
    ">
        <h1 style="color:#e53935; font-weight:800;">❌ Página não encontrada</h1>
        <p style="color:#555; font-size:1rem;">Ops! O link que você acessou não existe.</p>
    </div>
    `);
}

});

server.listen(porta, () => {
    console.log('Servidor rodando');
    console.log('Endereco: http://localhost:' + porta);
});

