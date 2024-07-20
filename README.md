# EcoSathi: Connect, Collect, Conserve

EcoSathi is an innovative platform designed to bridge the gap between local ragpickers and users, making it easy to schedule waste collection services. Our mission is to create a seamless and efficient system that benefits both the community and the environment.

By connecting users directly with local ragpickers, EcoSathi ensures fair pricing, transparency, and trust. Our platform not only facilitates these connections but also acts as a community for ragpickers, empowering them with access to courses and job opportunities to secure their future.

## Features

- **User Types**: Upon registering, users can choose between Client, Individual Ragpicker, or Organization (employing ragpicker workers). Each user is verified with identity proof.
- **Login Options**: We use JWT login as well as Google OAuth for login and registration.
- **Map Integration**: Integrated with Leaflet.js to locate nearby ragpickers for users.
- **Generative AI Chatbot**: Integrated Gemini's generative AI as a chatbot to assist users with inquiries.
- **Earnings Tracking**: Clients can track their earnings from selling rags.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Google OAuth
- **Map Integration**: Leaflet.js
- **AI**: Gemini's generative AI

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jiteshvarade/EcoSathi.git
    cd EcoSathi
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

EcoSathi is deployed on Vercel. You can access the live version at [EcoSathi](https://ecosathi.vercel.app/).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

<!--
## Contact

For any inquiries, please contact us at [your-email@example.com].
-->
EcoSathi: Connect, Collect, Conserve.
