# tte-blog
typescript, typeorm, express

### 1. setup
#### 1.1
`npm install`

#### 1.2
### maybe the cli of typeorm needs to be recompiled and packed. follow the instructions below:  
### typeorm Repository [link](https://github.com/eliziario/typeorm.git)


### Quote https://github.com/typeorm/typeorm/issues/4332 
> I think the only workaround right now is to build https://github.com/eliziario/typeorm yourself and use its command line tool to achieve certain goals.
> 
> Make sure you build eliziario-typeorm first like this:
> 
> ```
> npm install
> npm run compile
> npm run package
> ```
> 
> After that you could implement a custom npm-script like this:
> 
> ```
> ...
> "scripts": {
>   ...
>   "typeorm": "node /path/to/eliziario-typeorm/build/package/cli.js",
>   ...
> }
> ...
> ```
> 
> Then you can use this for instance:
> 
> ```
> npm run typeorm -- migration:run
> ```
> 
> Hope this helps & works, didn't really test it...


#### 1.3

> ```
> setup db
> run migrations
> ```

## happy coding

