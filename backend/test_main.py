from fastapi.testclient import TestClient
from app.app import app  

# Inicjalizacja klienta testowego
client = TestClient(app)

# Przykładowy test endpointu
def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}






