const request = require('supertest')
const app = require('../../src/app')

describe('Testing SubscriptionController', () => {
  it('should be able to subscribe to a group', async () => {
    const student = await request(app)
      .get('/students/1')

    const subscribe = await request(app)
      .post('/subscription/1')
      .send({
        ra: student.body.ra
      })

    expect(student.status).toBe(200)
    expect(student.body).toHaveProperty('ra')

    expect(subscribe.status).toBe(200)
    expect(subscribe.body).toHaveProperty('name')
  })

  it('should be able to unsubscribe a group', async () => {
    const student = await request(app)
      .get('/students/1')

    const unsubscribe = await request(app)
      .delete('/subscription/1')
      .send({
        ra: student.body.ra
      })

    expect(student.status).toBe(200)
    expect(student.body).toHaveProperty('ra')

    expect(unsubscribe.status).toBe(204)
  })
})