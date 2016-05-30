
#React Bank Account label

At BankXX they are very happy with their tested OO business logic. However their vanilla front-end UI logic is getting a bit out of control.  They've come to you to see if there is anything they can do to make it more manageable.

React seems like a good choice to refactor their front-end and allow us to re-use their business logic. In pairs we would like you to do this for them.


# Setting up app for React. Recap of day1.

```
  cd client
  npm install --save-dev babel-loader babel-preset-es2015 babel-preset-react
  npm install --save babel react react-dom
```

```
  webpack.config.js

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool:'source-map'
```

#Design

- BankBox()
  - AccountsBox(accounts, total)
    - AccountList(Account)
      - AccountItem(Account)
      - AccountItem(Account)
  - AccountsBox
    - AccountList(Account)
      - AccountItem(Account)
      - AccountItem(Account)


#React Bank Lab/Homework
Recreate the bank browser display using React.

Further additions to consider:
  Adding an interest payment feature.
    - Create a button that increases all accounts by 10%
