# (#for h1)

[Link Title](link) [Link title]-(link)

## (##for h2)

In the project directory, you can run:

`code container using template string.`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

(for make italic put text on the star \* \*)

(for make bold put text on the two star \*\* \*\*)

# _Project Name :_ **Gadget Freak**

## `npx create-react app gadget-freak-jwt-client`

## install necessary package

- React router - `npm install react-router-dom@6`
- firebase - `npm install firebase`
- react firebase hooks - `npm install --save react-firebase-hooks`

## generate access token secret

### `require('crypto').randomBytes(64).toString('hex')`

## Steps for jwt

### 1st step: create api end point for login

```bash
  app.post('/login', async (req, res) => {
            const email = req.body
            const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
            res.send({ accessToken })
        })
```
