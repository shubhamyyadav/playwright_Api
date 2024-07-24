const { test, expect } = require('@playwright/test');

test.describe('API Testing', () => {
    test('GET API Data Details', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2')
        expect(response.status()).toBe(200);
        const text = await response.text();
        expect(text).toContain('Janet');
        console.log(await response.json());
    });
});

test.describe('API Testing', () => {
    test('POST API Data Details', async ({ request }) => {
        const response = await request.post("https://reqres.in/api/users", {
            data: {
                "name": "Shubham",
                "job": "Leader"
            }
        })
        expect(response.status()).toBe(201);
        const text = await response.text();
        expect(text).toContain('Shubham');
        console.log(await response.json());
    });
});

test.describe('API Testing', () => {
    test('PUT API Data Details', async ({ request }) => {
        const response = await request.put("https://reqres.in/api/users/2", {
            data: {
                "name": "Shubham",
                "job": "Leader"
            }
        })
        expect(response.status()).toBe(200);
        const text = await response.text();
        expect(text).toContain('Shubham');
        console.log(await response.json());
    });
});

test.describe('API Testing', () => {
    test('DELETE API Data Details', async ({ request }) => {
        const response = await request.delete("https://reqres.in/api/users/2")
        expect(response.status()).toBe(204);
    });
});