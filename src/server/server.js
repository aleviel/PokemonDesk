import React from 'react';
import fs from 'fs';
import handlebars from 'handlebars';
import ReactDom from 'react-dom/server';
import path from 'path';
import Hapi from '@hapi/hapi';
import hapiInert from '@hapi/inert';
import { setPath } from 'hookrouter';
import App from '../components/app';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    await server.register(hapiInert);
    server.route({
        method: 'GET',
        path: '/main.js',
        handler: (request, h) => {
            return h.file(path.join(process.cwd(), 'dist', 'main.js'));
        },
    });

    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: (request) => {
            setPath(request.path);
            const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
            const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf8'));
            const result = ReactDom.renderToString(<App />);
            return template({ content: result });
        },
    });

    await server.start();
    // eslint-disable-next-line no-console
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

init();
