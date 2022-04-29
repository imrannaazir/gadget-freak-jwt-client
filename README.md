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

### 2nd step frontend

```bash
  if (user) {
        const postToken = async () => {
            const email = user?.email;
            if (email) {
                const { data } = await axios.post('http://localhost:5000/login', { email })
                localStorage.setItem('accessToken', data.accessToken)
            }
        }
        postToken()

        navigate(from, { replace: true });
    }
```

### step 3 : send authorization through headers

```bash
  useEffect(() => {
        async function loadOrders() {
            const email = user.email
            try {
                const { data } = await axios.get(`http://localhost:5000/orders?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })


                setOrders(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        loadOrders()
    }, [])
```

### 3rd step: make a function named verifyJWT on backed

```bash
  function verifyJWT(req, res, next) {
   const authHeader = req.headers.authorization;
   if (!authHeader) {

       return res.status(401).send({ message: 'unauthorized access'
       })
   }
       const token = authHeader.split(' ')[1]
       jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
        return res.status(403).send({ message: 'access forbidden' })
    }
    req.decoded = decoded
    next()
})
}
```

### 4th step: verify when load data

```bash
  app.get('/orders', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded.email
            const email = req.query.email;

            if (email === decodedEmail) {
                const query = { email: email }
                const cursor = orderCollection.find(query)
                const orders = await cursor.toArray()
                res.send(orders)
            }
            else {
                res.status(403).send({ message: 'access forbidden' })
            }

        })
```



## Steps for diploy on firebase
### Deploy from the start:
- ```npm install -g firebase-tools```(one time in a computer)
- ```firebase login```(one time in a computer)
- ```firebase init```(one time for each project)
  > - ? Are you ready to proceed? (Y/n)
  > - (*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
  > - existing project
  > - Select project
  > - What do you want to use as your public directory? build
  > - Configure as a single-page app (rewrite all urls to /index.html)? No
  > - Set up automatic builds and deploys with GitHub? No
- ```npm run build```
- ```firebase deploy```

### Deploy after every changes:
- ```npm run build```
- ```firebase deploy```



## 🎯Deploy Server in heroku
### One time for a computer.
**➡️** [Sign up heroku ](https://signup.heroku.com/)

**➡️** install heroku 64 bit from doc 

**➡️** ` heroku login ` 

### One time for each project.
**➡️** `heroku create`
### for every changes.
**➡️** `git add .`

**➡️** `git commit -m "messages"`

**➡️** `git push`

**➡️** `git push heroku main`

**➡️** dashboard >settings>revel config vars> put the .env key and valu
