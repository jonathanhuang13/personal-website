interface data {
  body: string;
  title: string;
}

export default ({ body, title }: data) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
   `;
};
