export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Make 10 App</h1>
      <p className="mt-4 text-lg">Let's make 10 with 4 numbers!</p>

      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>

      <input placeholder="Enter your expression here" className="mt-4 p-2 border rounded" />
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Check</button>
    </main>
  );
}