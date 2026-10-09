const state = {
  page: "dashboard",

  students: [
    {id:"241-00612", name:"Marbe Macula", phone:"09XX-XXX-1001", status:"inside", timeIn:"07:42 AM", hours:"02h 18m", validated:true},
    {id:"241-00388", name:"Cath Lyn Mae Abarca", phone:"09XX-XXX-1002", status:"inside", timeIn:"08:05 AM", hours:"01h 55m", validated:true},
    {id:"241-03031", name:"Charlotte Alison", phone:"09XX-XXX-1003", status:"inside", timeIn:"08:17 AM", hours:"01h 43m", validated:false},
    {id:"241-00553", name:"Annieza Grace Antigro", phone:"09XX-XXX-1004", status:"outside", timeIn:"07:31 AM", timeOut:"08:23 AM", hours:"00h 52m", validated:true},
    {id:"241-01054", name:"Christian Emmanuel Abarico", phone:"09XX-XXX-1005", status:"inside", timeIn:"09:01 AM", hours:"00h 59m", validated:true},
    {id:"241-02438", name:"Jassyn Alonzo", phone:"09XX-XXX-1006", status:"outside", timeIn:"07:50 AM", timeOut:"10:02 AM", hours:"02h 12m", validated:false}
  ],

  requirements: [],

  schedules: [
    ...[
      ["Monday","ECE 110","10:30 AM","01:30 PM","HINANG - HINANG 104"],
      ["Monday","ECE 109","01:30 PM","06:00 PM","TBA - TBA"],
      ["Tuesday","ECE 110","10:30 AM","01:30 PM","HINANG - HINANG 104"],
      ["Tuesday","ECE 111","01:30 PM","03:00 PM","TBA - TBA"],
      ["Wednesday","ECE 111","09:00 AM","10:30 AM","HINANG - HINANG 301"],
      ["Wednesday","ECE 109","03:00 PM","06:00 PM","TBA - TBA"],
      ["Thursday","ECE 107","07:30 AM","10:30 AM","HINANG - HINANG 108"],
      ["Thursday","ECE 108","10:30 AM","01:30 PM","HINANG - HINANG 104"],
      ["Thursday","ECE 111","01:30 PM","03:00 PM","TBA - TBA"],
      ["Friday","ECE 107","07:30 AM","10:30 AM","TBA - TBA"],
      ["Friday","ECE 110","10:30 AM","01:30 PM","TBA - TBA"],
      ["Friday","ECE 108","01:30 PM","04:30 PM","TBA - TBA"],
      ["Friday","ECE 111","04:30 PM","06:00 PM","TBA - TBA"]
    ].flatMap(([day, course, start, end, room]) =>
      ["241-00612","241-03031","241-00553"].map(id => ({
        student: stateStudentName(id), id, day, subject: course, code: course, instructor:"TBA", room, start, end
      }))
    ),

    ...[
      ["Monday","ECE 107","07:30 AM","10:30 AM","HINANG - HINANG 108"],
      ["Monday","ECE 110","10:30 AM","01:30 PM","HINANG - HINANG 104"],
      ["Tuesday","ECE 111","09:00 AM","10:30 AM","HINANG - HINANG 301"],
      ["Tuesday","ECE 109","03:00 PM","04:30 PM","HINANG - HINANG 103"],
      ["Tuesday","ECE 109","04:30 PM","06:00 PM","HINANG - HINANG 301"],
      ["Wednesday","SE 105","06:30 AM","07:30 AM","ONLINE - MASAOLMS"],
      ["Wednesday","ECE 107","07:30 AM","10:30 AM","HINANG - HINANG 108"],
      ["Wednesday","ECE 109","03:00 PM","04:30 PM","HINANG - HINANG 103"],
      ["Wednesday","ECE 109","04:30 PM","06:00 PM","HINANG - HINANG 301"],
      ["Thursday","ECE 111","09:00 AM","10:30 AM","HINANG - HINANG 301"],
      ["Thursday","ECE 108","10:30 AM","01:30 PM","HINANG - HINANG 104"],
      ["Thursday","ECE 109","03:00 PM","04:30 PM","HINANG - HINANG 103"],
      ["Thursday","ECE 109","04:30 PM","06:00 PM","HINANG - HINANG 301"],
      ["Friday","ECE 111","09:00 AM","10:30 AM","TBA - TBA"],
      ["Friday","ECE 110","10:30 AM","01:30 PM","MASAWA - MAH 204"],
      ["Friday","ECE 108","01:30 PM","04:30 PM","TBA - TBA"],
      ["Friday","ECE 111","04:30 PM","06:00 PM","TBA - TBA"]
    ].flatMap(([day, course, start, end, room]) =>
      ["241-00388","241-02438","241-01054"].map(id => ({
        student: stateStudentName(id), id, day, subject: course, code: course, instructor:"TBA", room, start, end
      }))
    )
  ],

  scans: [
    {date:"Oct 8, 2026", time:"07:42 AM", student:"Marbe Macula", id:"241-00612", type:"Time In", duration:"—"},
    {date:"Oct 8, 2026", time:"07:50 AM", student:"Jassyn Alonzo", id:"241-02438", type:"Time In", duration:"—"},
    {date:"Oct 8, 2026", time:"08:05 AM", student:"Cath Lyn Mae Abarca", id:"241-00388", type:"Time In", duration:"—"},
    {date:"Oct 8, 2026", time:"08:17 AM", student:"Charlotte Alison", id:"241-03031", type:"Time In", duration:"—"},
    {date:"Oct 8, 2026", time:"08:23 AM", student:"Annieza Grace Antigro", id:"241-00553", type:"Time Out", duration:"00h 52m"},
    {date:"Oct 8, 2026", time:"09:01 AM", student:"Christian Emmanuel Abarico", id:"241-01054", type:"Time In", duration:"—"},
    {date:"Oct 8, 2026", time:"10:02 AM", student:"Jassyn Alonzo", id:"241-02438", type:"Time Out", duration:"02h 12m"}
  ],

  sms: []
};

function stateStudentName(id) {
  const names = {
    "241-00612":"Marbe Macula",
    "241-00388":"Cath Lyn Mae Abarca",
    "241-03031":"Charlotte Alison",
    "241-00553":"Annieza Grace Antigro",
    "241-01054":"Christian Emmanuel Abarico",
    "241-02438":"Jassyn Alonzo"
  };
  return names[id] || id;
}

const pageMeta = {
  dashboard:["LIVE MONITORING","Campus Dashboard"],
  presence:["CAMPUS MONITORING","Campus Presence"],
  scans:["TRANSACTION HISTORY","Scan Records"],
  hours:["DURATION MONITORING","Campus Hours"],
  schedules:["ACADEMIC SCHEDULE","Class Schedules"],
  requirements:["VALIDATION MONITORING","Requirements"],
  sms:["COMMUNICATION HISTORY","SMS Notifications"],
  search:["STUDENT LOOKUP","Search Students"]
};

const $ = id => document.getElementById(id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

// Sidebar Toggle Functionality
const sidebar = $("sidebar");
const mobileOverlay = $("mobileOverlay");

function toggleSidebar() {
  sidebar.classList.toggle("open");
  mobileOverlay.classList.toggle("show");
}

$("menuToggle").addEventListener("click", toggleSidebar);
mobileOverlay.addEventListener("click", toggleSidebar);


function statusBadge(status) {
  if (status === "inside") return '<span class="badge green"><span class="status-dot online"></span> Inside</span>';
  return '<span class="badge blue"><span class="status-dot"></span> Outside</span>';
}

function renderDashboard() {
  const inside = state.students.filter(s => s.status === "inside");
  const lacking = state.requirements.length;
  const monitored = state.schedules.filter(s => state.students.some(x => x.id === s.id && x.status === "inside")).length;
  const html = `
    <div class="grid-6">
      <div class="stat-card stat-green"><div class="stat-label">Currently Inside</div><div class="stat-value">${inside.length}</div><div class="stat-meta">Live campus presence</div></div>
      <div class="stat-card stat-blue"><div class="stat-label">Today's Scans</div><div class="stat-value">${state.scans.length}</div><div class="stat-meta">Time In + Time Out</div></div>
      <div class="stat-card stat-blue"><div class="stat-label">Campus Hours</div><div class="stat-value">14h 42m</div><div class="stat-meta">Completed visits today</div></div>
      <div class="stat-card stat-yellow"><div class="stat-label">Lacking Requirements</div><div class="stat-value">${lacking}</div><div class="stat-meta">Students requiring attention</div></div>
      <div class="stat-card stat-blue"><div class="stat-label">Classes Monitored</div><div class="stat-value">${monitored}</div><div class="stat-meta">Students currently inside</div></div>
      <div class="stat-card stat-green"><div class="stat-label">SMS Today</div><div class="stat-value">${state.sms.length}</div><div class="stat-meta">Notification records</div></div>
    </div>

    <div class="two-col">
      <div class="panel">
        <div class="panel-head"><div><h3>Currently Inside Campus</h3><div class="sub">Automatically updated from scanner transactions</div></div><span class="badge green">${inside.length} ACTIVE</span></div>
        <div class="table-wrap"><table>
          <thead><tr><th>Status</th><th>Student</th><th>ID</th><th>Time In</th><th>Campus Duration</th></tr></thead>
          <tbody>${inside.map(s => `<tr><td>${statusBadge(s.status)}</td><td class="student-name">${escapeHTML(s.name)}</td><td>${s.id}</td><td>${s.timeIn}</td><td>${s.hours}</td></tr>`).join("")}</tbody>
        </table></div>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>Students With Lacking Requirements</h3><div class="sub">View-only validation monitoring</div></div><span class="badge yellow">${lacking} STUDENTS</span></div>
        <div>${state.requirements.map(r => `<div class="warning-row"><div><strong>${escapeHTML(r.name)}</strong><small>${r.id} · ${r.lacking.length} lacking requirement${r.lacking.length>1?"s":""}</small></div><button class="view-link" onclick="showPage('requirements')">VIEW</button></div>`).join("") || '<div class="empty" style="padding:20px;">No missing requirements found.</div>'}</div>
      </div>
    </div>

    <div class="bottom-grid">
      <div class="panel">
        <div class="panel-head"><div><h3>Upcoming Classes Being Monitored</h3><div class="sub">Reminder triggers exactly 20 minutes before class start</div></div><span class="badge blue">LIVE</span></div>
        <div class="table-wrap"><table>
          <thead><tr><th>Student</th><th>Subject</th><th>Code</th><th>Room</th><th>Start</th><th>Reminder</th></tr></thead>
          <tbody>${state.schedules.filter(s => state.students.some(x => x.id === s.id && x.status === "inside")).map(s => `<tr><td class="student-name">${escapeHTML(s.student)}</td><td>${escapeHTML(s.subject)}</td><td>${s.code}</td><td>${s.room}</td><td>${s.start}</td><td>${s.minutesAway===20 ? '<span class="badge green">SENT</span>' : '<span class="badge blue">MONITORING</span>'}</td></tr>`).join("") || '<tr><td colspan="6" class="empty">No active schedule monitoring records.</td></tr>'}</tbody>
        </table></div>
      </div>

      <div class="panel">
        <div class="panel-head"><div><h3>System Status</h3><div class="sub">Connectivity overview</div></div><span class="badge green">OPERATIONAL</span></div>
        <div class="system-grid">
          <div class="system-card"><span class="status-dot online"></span><strong>Scanner</strong><small>ESP32-S3 online</small></div>
          <div class="system-card"><span class="status-dot online"></span><strong>Database</strong><small>Connected</small></div>
          <div class="system-card"><span class="status-dot online"></span><strong>SMS Module</strong><small>GSM 900 ready</small></div>
          <div class="system-card"><span class="status-dot online"></span><strong>Sync</strong><small>Last sync: <span id="dashboardSync">now</span></small></div>
        </div>
      </div>
    </div>`;
  $("page-dashboard").innerHTML = html;
}

function renderPresence() {
  const inside = state.students.filter(s=>s.status==="inside");
  $("page-presence").innerHTML = `
    <div class="kpi-row">
      <div class="kpi"><strong>${inside.length}</strong><small>Currently Inside</small></div>
      <div class="kpi"><strong>${state.students.length-inside.length}</strong><small>Already Left</small></div>
      <div class="kpi"><strong>${state.scans.length}</strong><small>Scans Today</small></div>
      <div class="kpi"><strong>14h 42m</strong><small>Total Completed Hours</small></div>
    </div>
    <div class="panel table-panel"><div class="panel-head"><div><h3>Live Campus Presence</h3><div class="sub">One physical device handles alternating Time In / Time Out scans.</div></div><span class="badge green">AUTO SYNC</span></div>
    <div class="table-wrap"><table><thead><tr><th>Status</th><th>Student</th><th>ID</th><th>Time In</th><th>Time Out</th><th>Campus Duration</th></tr></thead><tbody>
    ${state.students.map(s=>`<tr><td>${statusBadge(s.status)}</td><td class="student-name">${escapeHTML(s.name)}</td><td>${s.id}</td><td>${s.timeIn||"—"}</td><td>${s.timeOut||"—"}</td><td>${s.hours}</td></tr>`).join("")}
    </tbody></table></div></div>`;
}

function renderScans() {
  $("page-scans").innerHTML = `
    <div class="page-toolbar"><div class="toolbar-title"><h3>Scan Transaction History</h3><p>Search and filter Time In / Time Out transactions.</p></div><input id="scanSearch" placeholder="Search student or ID..."><input id="scanDate" type="date"><select id="scanType"><option value="">All scan types</option><option>Time In</option><option>Time Out</option></select></div>
    <div class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>Date</th><th>Time</th><th>Student</th><th>ID</th><th>Scan Type</th><th>Visit Duration</th></tr></thead><tbody id="scanRows"></tbody></table></div></div>`;
  const filter = () => {
    const q=($("scanSearch").value||"").toLowerCase(), type=$("scanType").value;
    const rows=state.scans.filter(x=>(!q || x.student.toLowerCase().includes(q)||x.id.toLowerCase().includes(q))&&(!type||x.type===type));
    $("scanRows").innerHTML=rows.map(x=>`<tr><td>${x.date}</td><td>${x.time}</td><td class="student-name">${escapeHTML(x.student)}</td><td>${x.id}</td><td>${x.type==="Time In"?'<span class="badge green">TIME IN</span>':'<span class="badge blue">TIME OUT</span>'}</td><td>${x.duration}</td></tr>`).join("") || '<tr><td colspan="6" class="empty">No matching scan records.</td></tr>';
  };
  ["scanSearch","scanDate","scanType"].forEach(id=>$(id).addEventListener("input",filter));
  filter();
}

function renderHours() {
  $("page-hours").innerHTML = `
    <div class="page-toolbar"><div class="toolbar-title"><h3>Campus Hours</h3><p>Completed Time In–Time Out pairs are accumulated per student.</p></div><input id="hoursSearch" placeholder="Search student or ID..."><input type="date"></div>
    <div class="panel table-panel"><div class="panel-head"><div><h3>Daily Campus Duration</h3><div class="sub">Example data for the 10-student prototype.</div></div></div>
    <div class="table-wrap"><table><thead><tr><th>Student</th><th>ID</th><th>Time In</th><th>Time Out</th><th>Visit Duration</th><th>Total Today</th></tr></thead><tbody id="hoursRows">
    ${state.students.map(s=>`<tr><td class="student-name">${escapeHTML(s.name)}</td><td>${s.id}</td><td>${s.timeIn||"—"}</td><td>${s.timeOut||"—"}</td><td>${s.status==="outside"?s.hours:"—"}</td><td>${s.hours}</td></tr>`).join("")}
    </tbody></table></div></div>`;
  $("hoursSearch").addEventListener("input", e=>{
    const q=e.target.value.toLowerCase();
    [...$("hoursRows").children].forEach(row=>row.style.display=row.textContent.toLowerCase().includes(q)?"":"none");
  });
}

function renderSchedules() {
  $("page-schedules").innerHTML = `
    <div class="page-toolbar"><div class="toolbar-title"><h3>Class Schedules</h3><p>Master schedule and student-specific schedule monitoring.</p></div><input id="scheduleSearch" placeholder="Search student, subject, code..."><select id="scheduleDay"><option value="">All days</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option></select></div>
    <div class="panel table-panel"><div class="panel-head"><h3>Master Schedule</h3><span class="badge blue">${state.schedules.length} RECORDS</span></div><div class="table-wrap"><table><thead><tr><th>Student</th><th>Day</th><th>Subject</th><th>Code</th><th>Instructor</th><th>Room</th><th>Start</th><th>End</th></tr></thead><tbody id="scheduleRows"></tbody></table></div></div>`;
  const filter=()=>{
    const q=$("scheduleSearch").value.toLowerCase(), day=$("scheduleDay").value;
    const rows=state.schedules.filter(s=>(!q||[s.student,s.id,s.subject,s.code,s.instructor,s.room].join(" ").toLowerCase().includes(q))&&(!day||s.day===day));
    $("scheduleRows").innerHTML=rows.map(s=>`<tr><td class="student-name">${escapeHTML(s.student)}</td><td>${s.day}</td><td>${escapeHTML(s.subject)}</td><td>${s.code}</td><td>${escapeHTML(s.instructor)}</td><td>${s.room}</td><td>${s.start}</td><td>${s.end}</td></tr>`).join("")||'<tr><td colspan="8" class="empty">No schedule records found.</td></tr>';
  };
  $("scheduleSearch").addEventListener("input",filter); $("scheduleDay").addEventListener("change",filter); filter();
}

function renderRequirements() {
  $("page-requirements").innerHTML=`
    <div class="page-toolbar"><div class="toolbar-title"><h3>Requirement Validation</h3><p>View-only monitoring of stored validation status and lacking requirements.</p></div><input id="reqSearch" placeholder="Search student or ID..."><select id="reqStatus"><option value="">All statuses</option><option value="lacking">Not Validated</option><option value="complete">Validated</option></select></div>
    <div class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>Student</th><th>ID</th><th>Validation Status</th><th>Lacking Requirements</th></tr></thead><tbody id="reqRows"></tbody></table></div></div>`;
  const filter=()=>{
    const q=$("reqSearch").value.toLowerCase(), st=$("reqStatus").value;
    const rows=state.students.filter(s=>(!q||s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q))&&(!st||(st==="lacking"?!s.validated:s.validated)));
    $("reqRows").innerHTML=rows.map(s=>{
      const r=state.requirements.find(x=>x.id===s.id);
      return `<tr><td class="student-name">${escapeHTML(s.name)}</td><td>${s.id}</td><td>${s.validated?'<span class="badge green">VALIDATED</span>':'<span class="badge yellow">NOT VALIDATED</span>'}</td><td>${r?r.lacking.map(x=>`<span class="badge yellow" style="margin-right:5px">${escapeHTML(x)}</span>`).join(""):"None"}</td></tr>`;
    }).join("")||'<tr><td colspan="4" class="empty">No matching requirement records.</td></tr>';
  };
  $("reqSearch").addEventListener("input",filter); $("reqStatus").addEventListener("change",filter); filter();
}

function renderSMS() {
  $("page-sms").innerHTML=`
    <div class="kpi-row"><div class="kpi"><strong>${state.sms.length}</strong><small>Total SMS Records</small></div><div class="kpi"><strong>${state.sms.filter(x=>x.type.includes("Requirement")).length}</strong><small>Requirement Notifications</small></div><div class="kpi"><strong>${state.sms.filter(x=>x.type.includes("Class")).length}</strong><small>Class Reminders</small></div><div class="kpi"><strong>${state.sms.filter(x=>x.status==="Sent").length}</strong><small>Sent Successfully</small></div></div>
    <div class="page-toolbar"><div class="toolbar-title"><h3>SMS Notification History</h3><p>Requirement notifications and class schedule reminders.</p></div><input id="smsSearch" placeholder="Search student, message..."><select id="smsType"><option value="">All types</option><option value="Requirement">Requirement Notification</option><option value="Class">Class Schedule Reminder</option></select></div>
    <div class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>Date/Time</th><th>Student</th><th>Recipient</th><th>Type</th><th>Message</th><th>Status</th></tr></thead><tbody id="smsRows"></tbody></table></div></div>`;
  const filter=()=>{
    const q=$("smsSearch").value.toLowerCase(), t=$("smsType").value;
    const rows=state.sms.filter(x=>(!q||[x.student,x.recipient,x.message].join(" ").toLowerCase().includes(q))&&(!t||x.type.includes(t)));
    $("smsRows").innerHTML=rows.map(x=>`<tr><td>${x.time}</td><td class="student-name">${escapeHTML(x.student)}</td><td>${x.recipient}</td><td>${x.type.includes("Requirement")?'<span class="badge yellow">REQUIREMENT</span>':'<span class="badge blue">CLASS REMINDER</span>'}</td><td style="white-space:normal;max-width:360px">${escapeHTML(x.message)}</td><td><span class="badge green">${x.status}</span></td></tr>`).join("")||'<tr><td colspan="6" class="empty">No SMS records found.</td></tr>';
  };
  $("smsSearch").addEventListener("input",filter); $("smsType").addEventListener("change",filter); filter();
}

function renderSearch() {
  $("page-search").innerHTML=`
    <div class="toolbar-title"><h3>Search Students</h3><p>Quick monitoring lookup. Student records remain view-only.</p></div>
    <div class="search-box"><input id="studentSearch" placeholder="Search by student name or ID..."></div>
    <div id="studentResults" class="student-results"></div>`;
  const filter=()=>{
    const q=$("studentSearch").value.toLowerCase();
    const rows=state.students.filter(s=>!q||s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q));
    $("studentResults").innerHTML=rows.map(s=>`<div class="student-card"><h4>${escapeHTML(s.name)}</h4><p>${s.id}</p><div class="mini-row"><span>${statusBadge(s.status)}</span><span>Time In: ${s.timeIn||"—"}</span></div><div class="mini-row"><span>Time Out: ${s.timeOut||"—"}</span><span>Hours: ${s.hours}</span></div></div>`).join("")||'<div class="empty">No student found.</div>';
  };
  $("studentSearch").addEventListener("input",filter); filter();
}

function renderAll() {
  renderDashboard(); renderPresence(); renderScans(); renderHours(); renderSchedules(); renderRequirements(); renderSMS(); renderSearch();
}

function showPage(page) {
  state.page=page;
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active-page"));
  $(`page-${page}`).classList.add("active-page");
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.page===page));
  $("pageEyebrow").textContent=pageMeta[page][0];
  $("pageTitle").textContent=pageMeta[page][1];
  
  // Close Sidebar automatically on mobile when a link is clicked
  if(window.innerWidth <= 1024 && sidebar.classList.contains("open")) {
    toggleSidebar();
  }

  renderAll();
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll(".nav-item").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));

$("loginForm").addEventListener("submit", e=>{
  e.preventDefault();
  const user=$("username").value.trim(), pass=$("password").value;
  if(user==="admin" && pass==="admin123"){
    $("loginScreen").classList.add("hidden");
    $("app").classList.remove("hidden");
    renderAll();
    showPage("dashboard");
    toast("Administrator session started.");
  } else {
    $("loginMessage").textContent="Invalid demo credentials. Use admin / admin123.";
  }
});

$("togglePassword").addEventListener("click",()=>{
  $("password").type=$("password").type==="password"?"text":"password";
});

$("logoutBtn").addEventListener("click",()=>{
  $("app").classList.add("hidden");
  $("loginScreen").classList.remove("hidden");
  $("password").value="";
  $("loginMessage").textContent="";
});

function toast(message){
  const el=$("toast"); el.textContent=message; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove("show"),2500);
}

function updateClock(){
  const now=new Date();
  const timeString = now.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit",second:"2-digit"});
  const syncEl = $("syncTime");
  if(syncEl) syncEl.textContent=timeString;
  const dash=$("dashboardSync"); 
  if(dash) dash.textContent=timeString;
}
setInterval(updateClock,1000); updateClock();

// Demo data refresher
setInterval(()=>{
  if(!$("app").classList.contains("hidden")){
    renderAll();
  }
}, 15000);