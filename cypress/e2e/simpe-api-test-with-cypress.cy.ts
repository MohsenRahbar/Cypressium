describe('API Tests with HTTPBin', () => {
    // PASS Scenario - Authenticate with valid data
    it('should successfully authenticate with valid credentials', () => {
      const authData = {
        user: 'testuser',
        pass: 'testpass'
      };
  
      cy.request('POST', 'https://httpbin.org/post', authData)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.json).to.deep.eq(authData);
        });
    });
  
    // FAIL Scenario - Missing required field
    it('should fail when required field is missing', () => {
      const invalidData = {
        pass: 'testpass'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://httpbin.org/status/400', 
        body: invalidData,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  
    // FAIL Scenario - Unauthorized access
    it('should fail with 401 when not authorized', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/status/401',
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });
  