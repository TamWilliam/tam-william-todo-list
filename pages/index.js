export default function Home() {
  return (
    <main>
      <ul class="tabs">
        <li data-tab-target="#home" class="active tab">Home</li>
        <li data-tab-target="#pricing" class="tab">Pricing</li>
        <li data-tab-target="#about" class="tab">About</li>
        <li data-tab-target="#news" class="tab">News</li>
      </ul>

      <div class="tab-content">
        <div id="home" data-tab-content class="active">
          <h1>Home</h1>
          <p>This is the home</p>
        </div>
        <div id="pricing" data-tab-content>
          <h1>Pricing</h1>
          <p>Some information on pricing</p>
        </div>
        <div id="about" data-tab-content>
          <h1>About</h1>
          <p>Let me tell you about me</p>
        </div>
        <div id="news" data-tab-content>
          <h1>News</h1>
          <p>News is great.</p>
        </div>

      </div>
    </main>
  )
}
