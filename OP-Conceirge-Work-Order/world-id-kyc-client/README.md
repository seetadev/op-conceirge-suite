The OP Concierge Suite uses Worldcoin's WorldID for KYC verification by integrating WorldID's biometric identity verification system into its client onboarding process. We are at an initial stage of development. Please find the demo at  
https://drive.google.com/drive/folders/1NgPOsSNtbwSCA8LS1I86LxPg-jaA2w-f?usp=drive_link
And code at https://github.com/seetadev/op-conceirge-suite/tree/main/OP-Conceirge-Work-Order/world-id-kyc-client . Usage in OP Conceirge Work Order at https://github.com/seetadev/op-conceirge-suite/tree/main/OP-Conceirge-Work-Order
 
We wish to enable seamless integration of Worldcoin for KYC verification of client as follows: 

 1. WorldID Integration:
   - SDK/API Integration: The OP Concierge Suite integrates WorldID through its SDK or API, allowing clients to verify their identity using Worldcoin's biometric authentication.
   - Biometric Verification: Clients would undergo a biometric scan (typically using an orb device provided by Worldcoin) to verify their identity. This biometric data is then linked to a unique WorldID.

 2. KYC Verification Process:
   - Onboarding: When a new client signs up, they are prompted to verify their identity using WorldID. The system checks the biometric data against Worldcoin's decentralized identity network.
   - Verification: Once the client's identity is verified through WorldID, the suite marks the KYC process as complete. This verification is privacy-preserving, as the biometric data is not shared but only used to generate a proof of identity.

 3. Secure Identity Management:
   - Decentralized Identity: WorldID enables decentralized identity management, ensuring that clients retain control over their identity data. The OP Concierge Suite uses this verified identity to meet KYC requirements without directly storing sensitive personal information.

 4. Compliance and Auditing:
   - Regulatory Compliance: By integrating WorldID, the OP Concierge Suite ensures that it meets KYC and AML (Anti-Money Laundering) regulations without compromising user privacy.
   - Audit Trails: The system can maintain records of KYC checks performed through WorldID, ensuring transparency and compliance with legal requirements.

This integration allows the OP Concierge Suite to offer a seamless, privacy-preserving KYC process, leveraging the decentralized and secure identity verification capabilities of Worldcoin's WorldID.

# Implementation

KYC Client Verification with Worldcoin

We are authenticating and authorizing client with Worldcoin using NextAuth.js

## Getting Started

### 1. Create the repository from the template and install dependencies

Click the "Use this Template" button to create a new repository from this template.

```
git clone your_repo_url
cd your_repo_name
pnpm i
```

### 2. Configure your app in the Worldcoin Developer Portal

Create a new application in the [Worldcoin Developer Portal](https://developer.worldcoin.org/). Staging apps must use the [Worldcoin Simulator](https://simulator.worldcoin.org) for authentication, whereas production apps will use the [World App](https://worldcoin.org/download).

Add your callback URLs:
  - (staging apps only) `http://localhost:3000/api/auth/callback/worldcoin`
  - `https://your-app-url.com/api/auth/callback/worldcoin`

Note your Client ID and Client Secret for the next step.

### 3. Configure your local environment

Copy the .env.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.example .env.local
```

Add details for your Worldcoin application to the `.env.local` file. Get your Client ID and Client Secret from the [Worldcoin Developer Portal](https://developer.worldcoin.org/).

### 3. (Optional) Configure Additional Authentication Providers

Worldcoin's provider is pre-configured in this template. If you wish to add more providers, change line 33 of `components/header.tsx` to `signIn()` to allow users to choose their provider from a list and follow the steps below.

1. Review and update options in `pages/api/auth/[...nextauth].js` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

A list of configured providers and their callback URLs is available from the endpoint `/api/auth/providers`. You can find more information at https://next-auth.js.org/configuration/providers/oauth

3. You can also choose to specify an SMTP server for passwordless sign in via email.

#### Database

A database may be needed needed to persist user accounts and to support email sign in when adding extra providers. However, you can still use NextAuth.js for authentication without a database by using OAuth for authentication. If you do not specify a database, [JSON Web Tokens](https://jwt.io/introduction) will be enabled by default.

You **can** skip configuring a database and come back to it later if you want.

For more information about setting up a database, please check out the following links:

- Docs: [next-auth.js.org/adapters/overview](https://next-auth.js.org/adapters/overview)

### 4. Start the application

To run your site locally, use:

```
pnpm run dev
```

To run it in production mode, use:

```
pnpm run build
pnpm run start
```

### 5. Preparing for Production

Follow the [Deployment documentation](https://authjs.dev/guides/basics/deployment) or deploy the example instantly using [Vercel](https://vercel.com). Ensure you set your environment variables in your production environment as well.
