---
layout: post
title: Aftershock test
---

<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel=stylesheet>
<link href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.20/css/dataTables.bootstrap4.min.css" rel=stylesheet>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css" />
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>

<script>
    $(document).ready(function () {
        $('#aftershock_table').DataTable(
        {
        "paging": false}
        );
    });
</script>

<table id="aftershock_table" class="table table-striped table-bordered table-sm dataTable no-footer">
  <thead>
  <tr>
      <th>Ability 2</th>
      <th>Hero 2</th>
      <th>Ability 2 WR</th>
      <th>Sample size</th>
      <th>Combined WR</th>
      <th>Synergy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Anchor Smash</td>
      <td>Tidehunter</td>
      <td>46.45%</td>
      <td>612</td>
      <td>51.47%</td>
      <td>0.62%</td>
    </tr>
    <tr>
      <td>Arc Lightning</td>
      <td>Zeus</td>
      <td>45.37%</td>
      <td>1089</td>
      <td>59.41%</td>
      <td>9.10%</td>
    </tr>
    <tr>
      <td>Arcane Bolt</td>
      <td>Skywrath Mage</td>
      <td>47.72%</td>
      <td>1055</td>
      <td>54.79%</td>
      <td>3.31%</td>
    </tr>
    <tr>
      <td>Ball Lightning</td>
      <td>Storm Spirit</td>
      <td>49.37%</td>
      <td>624</td>
      <td>67.31%</td>
      <td>15.00%</td>
    </tr>
    <tr>
      <td>Blink Strike</td>
      <td>Riki</td>
      <td>48.76%</td>
      <td>550</td>
      <td>49.64%</td>
      <td>-2.37%</td>
    </tr>
    <tr>
      <td>Chakram</td>
      <td>Timbersaw</td>
      <td>50.10%</td>
      <td>1028</td>
      <td>62.84%</td>
      <td>10.17%</td>
    </tr>
    <tr>
      <td>Counterspell</td>
      <td>Anti-Mage</td>
      <td>52.28%</td>
      <td>908</td>
      <td>65.09%</td>
      <td>11.33%</td>
    </tr>
    <tr>
      <td>Crypt Swarm</td>
      <td>Death Prophet</td>
      <td>47.86%</td>
      <td>589</td>
      <td>54.67%</td>
      <td>3.12%</td>
    </tr>
    <tr>
      <td>Dark Pact</td>
      <td>Slark</td>
      <td>49.43%</td>
      <td>868</td>
      <td>57.49%</td>
      <td>5.15%</td>
    </tr>
    <tr>
      <td>Death Pulse</td>
      <td>Necrophos</td>
      <td>49.91%</td>
      <td>991</td>
      <td>57.42%</td>
      <td>4.84%</td>
    </tr>
    <tr>
      <td>Decay</td>
      <td>Undying</td>
      <td>47.19%</td>
      <td>588</td>
      <td>53.23%</td>
      <td>2.01%</td>
    </tr>
    <tr>
      <td>Double Edge</td>
      <td>Centaur Warrunner</td>
      <td>48.97%</td>
      <td>881</td>
      <td>56.87%</td>
      <td>4.76%</td>
    </tr>
    <tr>
      <td>Earthshock</td>
      <td>Ursa</td>
      <td>49.67%</td>
      <td>526</td>
      <td>56.46%</td>
      <td>4.00%</td>
    </tr>
    <tr>
      <td>Ice Vortex</td>
      <td>Ancient Apparition</td>
      <td>52.01%</td>
      <td>1013</td>
      <td>58.14%</td>
      <td>4.51%</td>
    </tr>
    <tr>
      <td>Life Drain</td>
      <td>Pugna</td>
      <td>46.66%</td>
      <td>628</td>
      <td>54.62%</td>
      <td>3.67%</td>
    </tr>
    <tr>
      <td>Lightning Storm</td>
      <td>Leshrac</td>
      <td>46.36%</td>
      <td>827</td>
      <td>51.03%</td>
      <td>0.22%</td>
    </tr>
    <tr>
      <td>Nether Blast</td>
      <td>Pugna</td>
      <td>45.78%</td>
      <td>864</td>
      <td>55.21%</td>
      <td>4.70%</td>
    </tr>
    <tr>
      <td>Plague Ward</td>
      <td>Venomancer</td>
      <td>48.21%</td>
      <td>562</td>
      <td>51.25%</td>
      <td>-0.48%</td>
    </tr>
    <tr>
      <td>Proximity Mines</td>
      <td>Techies</td>
      <td>50.20%</td>
      <td>991</td>
      <td>69.93%</td>
      <td>17.21%</td>
    </tr>
    <tr>
      <td>Purifying Flames</td>
      <td>Oracle</td>
      <td>43.85%</td>
      <td>1214</td>
      <td>50.16%</td>
      <td>0.61%</td>
    </tr>
    <tr>
      <td>Rocket Barrage</td>
      <td>Gyrocopter</td>
      <td>49.38%</td>
      <td>1014</td>
      <td>58.48%</td>
      <td>6.17%</td>
    </tr>
    <tr>
      <td>Rolling Boulder</td>
      <td>Earth Spirit</td>
      <td>47.88%</td>
      <td>720</td>
      <td>57.50%</td>
      <td>5.94%</td>
    </tr>
    <tr>
      <td>Scream Of Pain</td>
      <td>Queen of Pain</td>
      <td>47.20%</td>
      <td>729</td>
      <td>56.93%</td>
      <td>5.71%</td>
    </tr>
    <tr>
      <td>Shadow Poison</td>
      <td>Shadow Demon</td>
      <td>43.61%</td>
      <td>1318</td>
      <td>53.19%</td>
      <td>3.76%</td>
    </tr>
    <tr>
      <td>Shadowraze</td>
      <td>Shadow Fiend</td>
      <td>46.64%</td>
      <td>616</td>
      <td>52.27%</td>
      <td>1.33%</td>
    </tr>
    <tr>
      <td>Shrapnel</td>
      <td>Sniper</td>
      <td>55.83%</td>
      <td>584</td>
      <td>58.56%</td>
      <td>3.02%</td>
    </tr>
    <tr>
      <td>Soul Assumption</td>
      <td>Visage</td>
      <td>48.18%</td>
      <td>558</td>
      <td>55.38%</td>
      <td>3.67%</td>
    </tr>
    <tr>
      <td>Spark Wraith</td>
      <td>Arc Warden</td>
      <td>49.36%</td>
      <td>779</td>
      <td>51.99%</td>
      <td>-0.31%</td>
    </tr>
    <tr>
      <td>Spawn Spiderlings</td>
      <td>Broodmother</td>
      <td>44.97%</td>
      <td>535</td>
      <td>52.90%</td>
      <td>2.79%</td>
    </tr>
    <tr>
      <td>Static Remnant</td>
      <td>Storm Spirit</td>
      <td>45.53%</td>
      <td>1513</td>
      <td>62.79%</td>
      <td>12.40%</td>
    </tr>
    <tr>
      <td>Terrorize</td>
      <td>Dark Willow</td>
      <td>51.54%</td>
      <td>781</td>
      <td>67.22%</td>
      <td>13.83%</td>
    </tr>
    <tr>
      <td>Timber Chain</td>
      <td>Timbersaw</td>
      <td>46.05%</td>
      <td>523</td>
      <td>56.79%</td>
      <td>6.14%</td>
    </tr>
    <tr>
      <td>Whirling Axes (Melee)</td>
      <td>Troll Warlord</td>
      <td>50.21%</td>
      <td>806</td>
      <td>63.90%</td>
      <td>11.17%</td>
    </tr>
    <tr>
      <td>Whirling Death</td>
      <td>Timbersaw</td>
      <td>50.41%</td>
      <td>646</td>
      <td>63.16%</td>
      <td>10.33%</td>
    </tr>
  </tbody>
</table>