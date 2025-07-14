# Web frontend

## Project structure

```
├───assets <-> Chứa các static asset
│   ├───fonts <-> Chứa các font
│   └─── images  <-> Chứa các ảnh nền, ảnh icon svg
│───components <-> Chứa các component dùng chung giữa các module
│───core <-> Chứa các function core VD axios
│───helper <-> Chứa các function helper, utility
│───languages <-> Chứa các file i18n
│───modules <-> Chứa các module chức năng
│   └───moduleX <-> thư mục module X
│       ├───components <-> Chứa các component sử dụng trong module như grid, modal CRUD
│       ├───pages <-> Chứa các container component ứng vs các route của module
│       │   └───styled.ts <-> Chứa các styled component của module
│       ├───constants <-> Chứa các biến không đổi của module
│       ├───store  <-> Chứa trạng thái tổng của module
│       ├───services <-> Chứa các function call axios của module
│       ├───routes.ts <-> Chứa config route của module
│       ├───queryHooks <-> Chứa các hooks để truy vấn data
│       └───types.ts <-> Chứa các interface model của module
├───
├───router <-> Chứa route tree config
├───index.scss chưa style tổng của hệ thống
├───configs <-> Chứa các cấu hình của ứng dụng
├───App.tsx <-> Cấu hình routes component
├───main.tsx  <-> Root component
└───types.ts <-> Các interface model dùng chung giữa các module

```

## Prerequisite

- node v18 and up
- yarn package manager
- Prettier extension for your ide IDE
- Eslint extension for your IDE

## Installation

### Install dependencies with yarn (please don't use npm as we save all package versions in yarn's lockfile):

```
yarn
```

### Setup environment

Create local environment file by create a new file `env.local`, then copy content of .env.development into `env.local`

### Run the project

```
yarn dev
```

## Add modules

1. Create a new module in modules file
2. Create a new routes.tsx, and export an array of routes according to format
3. In the routes/sidebar.tsx file, create an additional key defined in the `database` with descriptive information about titleId and uri.
4. In the routes/routes.ts, Add the routes just created in step 2 to `mainRoutes`

## Code formatting and linting

- This project use prettier for code formatting, and eslint for linting, please install Prettier and Eslint extension and remember to format code before make a commit

## Branch prefixes

Define the default prefixes for new branches, to allow automated workflows and make branch types clearer.

1. bugfix/\*
2. feature/\*
3. hotfix/\*
4. release/
