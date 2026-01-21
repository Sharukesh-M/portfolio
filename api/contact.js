export default function handler(req, res) {
    // CORS if needed, but Vercel handles same-origin well

    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // In a real app, you would send this to an email service
        console.log('Received message from:', name, email);

        return res.status(200).json({ status: 'success', message: 'Message received' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
