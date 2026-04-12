---
kind: remote
name: sample-gas-agent
agent_card_json: |
  {
    "name": "API Manager",
    "description": "Provide management for using various APIs.\n- Run with exchange values between various currencies. For example, this answers \"What is the exchange rate between USD and GBP?\".\n- Return the weather information by providing the location and the date, and the time.",
    "provider": {
      "organization": "Tanaike",
      "url": "https://github.com/tanaikech"
    },
    "version": "1.0.0",
    "url": "https://script.google.com/macros/s/{your deployment ID}/exec?accessKey=sample",
    "defaultInputModes": [
      "text/plain"
    ],
    "defaultOutputModes": [
      "text/plain"
    ],
    "capabilities": {
      "streaming": false,
      "pushNotifications": false,
      "stateTransitionHistory": false
    },
    "skills": [
      {
        "id": "get_exchange_rate",
        "name": "Currency Exchange Rates Tool",
        "description": "Helps with exchange values between various currencies",
        "tags": [
          "currency conversion",
          "currency exchange"
        ],
        "examples": [
          "What is exchange rate between USD and GBP?"
        ],
        "inputModes": [
          "text/plain"
        ],
        "outputModes": [
          "text/plain"
        ]
      },
      {
        "id": "get_current_weather",
        "name": "Get current weather",
        "description": "This agent can return the weather information by providing the location and the date, and the time.",
        "tags": [
          "weather"
        ],
        "examples": [
          "Return the weather in Tokyo for tomorrow's lunchtime.",
          "Return the weather in Tokyo for 9 AM on May 27, 2025."
        ],
        "inputModes": [
          "text/plain"
        ],
        "outputModes": [
          "text/plain"
        ]
      }
    ]
  }
---
