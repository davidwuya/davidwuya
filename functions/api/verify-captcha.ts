interface Env {
  HCAPTCHA_SECRET: string;
  CONTACT_EMAIL: string;
}

interface Context {
  request: Request;
  env: Env;
}

export async function onRequestPost(context: Context): Promise<Response> {
  try {
    const body = (await context.request.json()) as { token: string };
    const token = body.token;

    if (!token) {
      return new Response(JSON.stringify({ error: "Missing token" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const verifyRes = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: context.env.HCAPTCHA_SECRET,
        response: token,
      }),
    });

    const result = (await verifyRes.json()) as { success: boolean };

    if (!result.success) {
      return new Response(JSON.stringify({ error: "Verification failed" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ email: context.env.CONTACT_EMAIL }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
