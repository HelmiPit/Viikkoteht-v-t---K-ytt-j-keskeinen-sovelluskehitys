import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;

// dummy mock data
let items = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 6, name: 'Item 6'},
  {id: 8, name: 'Item 8'},
];

// JSON 404 response handler
const notFound = (response, message = 'Resource Not Found') => {
  response.writeHead(404, {'Content-Type': 'application/json'});
  response.end(JSON.stringify({error: message}));
};

const server = http.createServer((req, res) => {
  console.log('Request', req.method, req.url);
  // parse url and query params
  const parsedUrl = new URL(req.url, `http://${hostname}:${port}`);
  const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
  const resource = pathParts[0];
  const id = pathParts[1];

  // GET root
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>Tervetuloa esimerkkirajapintaan</p>');

  // GET /items OR GET /items/:id OR GET /items?name=searchTerm (Point 5 functionality)
  } else if (req.method === 'GET' && resource === 'items') {
    const nameQuery = parsedUrl.searchParams.get('name');

    if (id) {
      const item = items.find((item) => id == item.id);
      if (!item) {
        notFound(res, 'Item not found');
        return;
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(item));
    } else if (nameQuery) {
      // Search items by name
      const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(nameQuery.toLowerCase())
      );
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(filteredItems));
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(items));
    }
    res.end();

  // POST /items
  } else if (req.method === 'POST' && resource === 'items') {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk.toString();
    });
    req.on('end', () => {
      console.log('POST data:', data);
      try {
        const newItem = JSON.parse(data);
        newItem.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
        items.push(newItem);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Item created', item: newItem}));
      } catch {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Invalid JSON data'}));
      }
    });

  // PUT /items/:id
  } else if (req.method === 'PUT' && resource === 'items') {
    if (!id) {
      notFound(res, 'ID is required for update');
      return;
    }
    let data = '';
    req.on('data', (chunk) => {
      data += chunk.toString();
    });
    req.on('end', () => {
      try {
        const itemIndex = items.findIndex((item) => id == item.id);
        if (itemIndex === -1) {
          notFound(res, 'Item not found to update');
          return;
        }
        const updatedData = JSON.parse(data);
        items[itemIndex] = { ...items[itemIndex], ...updatedData, id: Number(id) };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Item updated', item: items[itemIndex]}));
      } catch {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Invalid JSON data'}));
      }
    });

  // DELETE /items/:id
  } else if (req.method === 'DELETE' && resource === 'items') {
    if (!id) {
      notFound(res, 'ID is required for deletion');
      return;
    }
    const itemIndex = items.findIndex((item) => id == item.id);
    if (itemIndex === -1) {
      notFound(res, 'Item not found to delete');
      return;
    }
    const deletedItem = items.splice(itemIndex, 1);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'Item deleted', item: deletedItem[0]}));

  // Default 404 error response
  } else {
    notFound(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});