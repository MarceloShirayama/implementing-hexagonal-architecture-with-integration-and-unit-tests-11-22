import axios from "axios";

describe("APP", () => {
  it("Deve testar a API", async () => {
    const response = await axios.get(
      "http://localhost:3000/cards/1234/invoices"
    );

    const output = response.data;

    expect(output.total).toBe(1050);
  });
});
