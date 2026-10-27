import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;

// Dummy mock data
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

  // Parse URL and query parameters
  const parsedUrl = new URL(req.url, `http://${hostname}:${port}`);
  const pathParts = parsedUrl.pathname.split('/').filter(Boolean);
  const resource = pathParts[0];
  const id = pathParts[1];

  // GET root
  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>Tervetuloa esimerkkirajapintaan</p>');

  // OMA LISÄYS:
  // GET /joke (get a random Chuck Norris joke)
  } else if (req.method === 'GET' && resource === 'joke') {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch joke');
        }

        const data = await response.json();

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          joke: data.value
        }));
      })
      .catch((error) => {
        console.error('Error fetching joke:', error.message);

        if (!res.headersSent) {
          res.writeHead(502, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({
            error: 'Could not fetch a Chuck Norris joke'
          }));
        }
      });

  // GET /items OR GET /items/:id
  } else if (req.method === 'GET' && resource === 'items') {
    if (id) {
      const item = items.find((item) => id == item.id);

      if (!item) {
        notFound(res, 'Item not found');
        return;
      }

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(item));

    } else {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(items));
    }

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
        newItem.id = items.length > 0
          ? Math.max(...items.map((item) => item.id)) + 1
          : 1;

        items.push(newItem);

        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          message: 'Item created',
          item: newItem
        }));
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

        items[itemIndex] = {
          ...items[itemIndex],
          ...updatedData,
          id: Number(id)
        };

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
          message: 'Item updated',
          item: items[itemIndex]
        }));
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
    res.end(JSON.stringify({
      message: 'Item deleted',
      item: deletedItem[0]
    }));

  // Default 404 error response
  } else {
    notFound(res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
