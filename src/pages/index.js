import Tabs from '../components/Tabs.jsx';

export default function Home() {
  return (
    <main>
      <div class="tab">
        <button class="tablinks" onclick="tabs(event, 'London')">London</button>
        <button class="tablinks" onclick="tabs(event, 'Paris')">Paris</button>
        <button class="tablinks" onclick="tabs(event, 'Tokyo')">Tokyo</button>
      </div>

      <div id="London" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </main>
  )

}
