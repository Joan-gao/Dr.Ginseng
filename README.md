<h1 align="center">Dr.Ginseng: A Holistic AI Health Platform Integrating Wearable Tech and Traditional Medicine</h1>

## **Introduction**
Dr.Ginseng combines biological data with wellness practices from TCM and Western medicine. This integrated approach offers personalized advice on diet, exercise, and stress management, aiming to prevent health issues before they occur and providing a cutting-edge solution in smart healthcare.

## **Technologies Use**
1. **Frontend**: React, Typescript
2. **Backend**: Python, PostgreSQL
4. **AI Development**: Pytorch, Nvidia AI Workbench
5. **Data Analysis**: SAS viya
6. **Hosting**: firebase, Heroku

## **Core Features**
1. **Bio-Data Analysis:** Performed data cleaning, analysis, visualization, and model training using SAS Viya, leveraging advanced machine learning techniques like RNN/LSTM for data prediction and extrapolation.
2. **LLM Medical Model with RAG:** Used Nvidia AI Workbench to fine-tune LLMs for predicting health conditions based on wearable data, with RAG providing personalized suggestions through real-time contextual information.
3. **Full Stack Development**: Developed three main pages: Health Dashboard, TCM Knowledge Base, and LLM Medical Chatbot, with a TypeScript frontend, Python backend, and PostgreSQL database.
## How to Run

1. **Install dependencies**


```bash
npm install
```

- Start the frontend server

```bash
npm run start
```

2. **Local Env**

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxxxxxxxx
CLERK_SECRET_KEY=xxxxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup

# you need to config the clerk webhook secret key if you want to use the clerk with database
CLERK_WEBHOOK_SECRET=xxxxxxxxxxx

NEXT_PUBLIC_SERVICE_MODE=server

# Postgres database URL
DATABASE_URL=xxxxxxxxxxx

# use `openssl rand -base64 32` to generate a key for the encryption of the database
# we use this key to encrypt the user api key
KEY_VAULTS_SECRET=xxxxxxxxxxx

APP_URL=xxxxxxxxxxx

DATABASE_DRIVER=neon

OPENAI_API_KEY=xxxxxx
```
3.**Init Databse**

- Navigate to the database folder
```bash
/src/app/database/server/migrations
```
- Copy and pasted the init sql to neon instance and run 
```bash
0000_init.sql
0001_add_client_id.sql
0002_amusing_puma.sql
0003_naive_echo.sql
0004_add_next_auth.sql
0005_pgvector.sql
0006_add_knowledge_base.sql
0007_fix_embedding_table.sql
```
## Links
- ([Devpost](https://devpost.com/software/dr-ginseng))
- ([Demo Video](https://youtu.be/746qCydB6bE?si=1mB0IycqOZWpZIae))
- ([Product Proposal](https://drive.google.com/file/d/1B35UVChgLauVvs1RS__oqqh2USI4ohca/view?usp=sharing))
## Contributors
- **Xinyi Gao** [[Linkedin](https://www.linkedin.com/in/xinyi-gao-cn/)][[GitHub](https://github.com/Joan-gao)]: Product Design, UI/UX Design, Front-end Development
- **Li Cui** [[Linkedin](https://www.linkedin.com/in/li-cui-73809027b)][[GitHub](https://github.com/amandaliberaann)]: Backend Development, Data Analysis
- **Lee ( Jiacheng ) Li** [[Linkedin](https://www.linkedin.com/in/jiacheng-li-b17b41242/)][[GitHub](https://github.com/ljc0359)]: AI Development
