export async function onRequest(context) {
  const html = await fetch('https://raw.githubusercontent.com/Yashkbb/Thankyou-page/main/thankyou.html');
  const text = await html.text();
  return new Response(text, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'no-store' }
  });
}
