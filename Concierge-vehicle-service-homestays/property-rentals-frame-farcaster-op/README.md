# Property rentals or lease (purchase) on Farcaster and Optimism Chain 

Please visit -

https://warpcast.com/~/developers/frames?url=https%3A%2F%2Fframes.neynar.com%2Ff%2Fb1d6189a%2F69ae0817

URL: https://frames.neynar.com/f/b1d6189a/69ae0817

Listing of rental properties made available on Farcaster via EtherCalc and bridge apis on Optimism on-chain: https://ethercalc.net/veg1fcob7fe3



https://warpcast.com/~/developers/frames?url=https%3A%2F%2Fframes.neynar.com%2Ff%2F1369eae6%2F69ae0817





This Flask application uses Neynar's API to fetch and display casts from the EVM channel. Follow these steps to get started:

## Steps

### Step 1: Clone the Repository

Clone the Neynar Mini-App repository to your local machine:

```sh
git clone https://github.com/neynarxyz/farcaster-examples
```

### Step 2: Prepare the Application Directory

Move the Flask app directory to your desired location and remove the cloned repository's extra contents:

```sh
mv farcaster-examples/flask-app .
rm -rf farcaster-examples
cd flask-app
```

### Step 3: Set Up a Virtual Environment

Create and activate a virtual environment for the application:

```sh
python -m venv venv
# Activate the environment:
# On macOS/Linux:
source venv/bin/activate
# On Windows:
.\venv\Scripts\activate
```

### Step 4: Install Dependencies

Install the required Python packages:

```sh
pip install -r requirements.txt
```

### Step 5: Edit the FID and the API key

Open `app.py` and replace the `api_key` with your own:

```python
api_key = "YOUR_API_KEY_HERE"
```

### Step 6: Run the Application

Start the Flask app:

```sh
python app.py
# Your app will be running on port 5000
```

You should now see the Neynar mini-app running and displaying casts from the EVM channel!
