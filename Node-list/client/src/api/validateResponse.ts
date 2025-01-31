export async function validationResponse(response: Response): Promise<Response> {
    if(!response.ok) {
        throw new Error(await response.text())
    }

    return response;
}