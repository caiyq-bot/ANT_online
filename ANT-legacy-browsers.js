/************ 
 * Ant *
 ************/


// store info about the experiment session:
let expName = 'ANT';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
    'nBlocks': '1',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code_cue_prac
var cue_pos1, cue_pos2;   // 新增全局变量
// Run 'Before Experiment' code from code_fix


// Run 'Before Experiment' code from code_cue


// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
const pracLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pracLoopLoopBegin(pracLoopLoopScheduler));
flowScheduler.add(pracLoopLoopScheduler);
flowScheduler.add(pracLoopLoopEnd);









const scheduleLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(scheduleLoopLoopBegin(scheduleLoopLoopScheduler));
flowScheduler.add(scheduleLoopLoopScheduler);
flowScheduler.add(scheduleLoopLoopEnd);








flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'block_prac.csv', 'path': 'block_prac.csv'},
    {'name': 'block_a.csv', 'path': 'block_a.csv'},
    {'name': 'block_a.csv', 'path': 'block_a.csv'},
    {'name': 'block_prac.csv', 'path': 'block_prac.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text_welcome;
var key_resp_welcome;
var n_blocks;
var IntroClock;
var text_intro;
var key_resp_intro;
var PracContinue;
var Fix_pracClock;
var fix_timer_prac;
var fix_duration;
var Cue_pracClock;
var cue_timer_prac;
var text_1_cue_prac;
var text_2_cue_prac;
var Target_pracClock;
var target_timer_prac;
var text_target_prac;
var key_resp_target_prac;
var FbClock;
var fb_text;
var fb_color;
var text_fb;
var AskPracClock;
var text_askprac;
var key_resp_askprac;
var QuitPracClock;
var BlockBeginClock;
var n_this_block;
var FixClock;
var fix_timer;
var CueClock;
var cue_timer;
var text_1_cue;
var text_2_cue;
var TargetClock;
var target_timer;
var text_target;
var key_resp_target;
var BlockEndClock;
var text_BlockEnd;
var key_resp_BlockEnd;
var fb_blockend;
var EndClock;
var text_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: '欢迎参加注意测试！\n接下来我们将向你介绍内容。\n\n[按空格键继续...]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_welcome
  n_blocks = Number.parseInt(expInfo["nBlocks"]);
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  text_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_intro',
    text: '请将左手食指放在F键上，右手食指放在J键上。\n接下来，请你根据【中央箭头的方向】选择按键。\n\n如果中央箭头指向右边 > ，按J：\n-->-- 按J\n>>>>> 按J \n<<><< 按J\n\n如果中央箭头指向左边 < ，按F:\n--<-- 按F\n<<<<< 按F\n>><>> 按F\n\n[按空格键开始练习...]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  PracContinue = 0;
  
  // Initialize components for Routine "Fix_prac"
  Fix_pracClock = new util.Clock();
  fix_timer_prac = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_timer_prac', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Run 'Begin Experiment' code from code_fix_prac
  fix_duration = 0.4;
  
  // Initialize components for Routine "Cue_prac"
  Cue_pracClock = new util.Clock();
  cue_timer_prac = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cue_timer_prac', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_1_cue_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1_cue_prac',
    text: '*',
    font: 'SimSun',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_2_cue_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2_cue_prac',
    text: '*',
    font: 'SimSun',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Target_prac"
  Target_pracClock = new util.Clock();
  target_timer_prac = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_timer_prac', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_target_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_target_prac',
    text: '',
    font: 'SimSun',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_target_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fb"
  FbClock = new util.Clock();
  // Run 'Begin Experiment' code from code_fb
  fb_text = "";
  fb_color = "white";
  
  text_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fb',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "AskPrac"
  AskPracClock = new util.Clock();
  // Run 'Begin Experiment' code from code_askprac
  PracContinue = 1;
  
  text_askprac = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_askprac',
    text: '请选择是否继续练习？\n\n按【m】——不了解测试内容，继续练习\n\n按【z】——了解测试内容，结束练习\n\n按z将进入正式测试，没有“正确”/“错误”反馈。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_askprac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "QuitPrac"
  QuitPracClock = new util.Clock();
  // Initialize components for Routine "BlockBegin"
  BlockBeginClock = new util.Clock();
  // Run 'Begin Experiment' code from code_bb
  n_this_block = 0;
  
  // Initialize components for Routine "Fix"
  FixClock = new util.Clock();
  // Run 'Begin Experiment' code from code_fix
  fix_duration = 0.4;
  
  fix_timer = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix_timer', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "Cue"
  CueClock = new util.Clock();
  cue_timer = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cue_timer', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_1_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1_cue',
    text: '*',
    font: 'SimSun',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_2_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2_cue',
    text: '*',
    font: 'SimSun',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Target"
  TargetClock = new util.Clock();
  target_timer = new visual.ShapeStim ({
    win: psychoJS.window, name: 'target_timer', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: 1.0, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_target = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_target',
    text: '',
    font: 'SimSun',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_target = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BlockEnd"
  BlockEndClock = new util.Clock();
  text_BlockEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_BlockEnd',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_BlockEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_blockend
  fb_blockend = "";
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: '测试结束，感谢参与！\n(5s后自动退出）',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeMaxDurationReached;
var _key_resp_welcome_allKeys;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_welcome.keys = undefined;
    key_resp_welcome.rt = undefined;
    _key_resp_welcome_allKeys = [];
    psychoJS.experiment.addData('Welcome.started', globalClock.getTime());
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(text_welcome);
    WelcomeComponents.push(key_resp_welcome);
    
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome* updates
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome.tStart = t;  // (not accounting for frame time here)
      text_welcome.frameNStart = frameN;  // exact frame index
      
      text_welcome.setAutoDraw(true);
    }
    
    
    // if text_welcome is active this frame...
    if (text_welcome.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_welcome* updates
    if (t >= 0.0 && key_resp_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_welcome.tStart = t;  // (not accounting for frame time here)
      key_resp_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_welcome.clearEvents(); });
    }
    
    // if key_resp_welcome is active this frame...
    if (key_resp_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_welcome.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_welcome_allKeys = _key_resp_welcome_allKeys.concat(theseKeys);
      if (_key_resp_welcome_allKeys.length > 0) {
        key_resp_welcome.keys = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_resp_welcome.rt = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].rt;
        key_resp_welcome.duration = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    WelcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_welcome.corr, level);
    }
    psychoJS.experiment.addData('key_resp_welcome.keys', key_resp_welcome.keys);
    if (typeof key_resp_welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_welcome.rt', key_resp_welcome.rt);
        psychoJS.experiment.addData('key_resp_welcome.duration', key_resp_welcome.duration);
        routineTimer.reset();
        }
    
    key_resp_welcome.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var IntroMaxDurationReached;
var _key_resp_intro_allKeys;
var IntroMaxDuration;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    IntroClock.reset();
    routineTimer.reset();
    IntroMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_intro.keys = undefined;
    key_resp_intro.rt = undefined;
    _key_resp_intro_allKeys = [];
    psychoJS.experiment.addData('Intro.started', globalClock.getTime());
    IntroMaxDuration = null
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(text_intro);
    IntroComponents.push(key_resp_intro);
    
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro' ---
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_intro* updates
    if (t >= 0.0 && text_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_intro.tStart = t;  // (not accounting for frame time here)
      text_intro.frameNStart = frameN;  // exact frame index
      
      text_intro.setAutoDraw(true);
    }
    
    
    // if text_intro is active this frame...
    if (text_intro.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_intro* updates
    if (t >= 0.0 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
    }
    
    // if key_resp_intro is active this frame...
    if (key_resp_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
      if (_key_resp_intro_allKeys.length > 0) {
        key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
        key_resp_intro.duration = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro' ---
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_intro.corr, level);
    }
    psychoJS.experiment.addData('key_resp_intro.keys', key_resp_intro.keys);
    if (typeof key_resp_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro.rt', key_resp_intro.rt);
        psychoJS.experiment.addData('key_resp_intro.duration', key_resp_intro.duration);
        routineTimer.reset();
        }
    
    key_resp_intro.stop();
    // Run 'End Routine' code from code
    PracContinue = 1;
    
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pracLoop;
function pracLoopLoopBegin(pracLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pracLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'pracLoop'
    });
    psychoJS.experiment.addLoop(pracLoop); // add the loop to the experiment
    currentLoop = pracLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    pracLoop.forEach(function() {
      snapshot = pracLoop.getSnapshot();
    
      pracLoopLoopScheduler.add(importConditions(snapshot));
      const prac_trialsLoopScheduler = new Scheduler(psychoJS);
      pracLoopLoopScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot));
      pracLoopLoopScheduler.add(prac_trialsLoopScheduler);
      pracLoopLoopScheduler.add(prac_trialsLoopEnd);
      pracLoopLoopScheduler.add(AskPracRoutineBegin(snapshot));
      pracLoopLoopScheduler.add(AskPracRoutineEachFrame());
      pracLoopLoopScheduler.add(AskPracRoutineEnd(snapshot));
      pracLoopLoopScheduler.add(QuitPracRoutineBegin(snapshot));
      pracLoopLoopScheduler.add(QuitPracRoutineEachFrame());
      pracLoopLoopScheduler.add(QuitPracRoutineEnd(snapshot));
      pracLoopLoopScheduler.add(pracLoopLoopEndIteration(pracLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var prac_trials;
function prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block_prac.csv',
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials.forEach(function() {
      snapshot = prac_trials.getSnapshot();
    
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(Fix_pracRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(Fix_pracRoutineEachFrame());
      prac_trialsLoopScheduler.add(Fix_pracRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(Cue_pracRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(Cue_pracRoutineEachFrame());
      prac_trialsLoopScheduler.add(Cue_pracRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(Target_pracRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(Target_pracRoutineEachFrame());
      prac_trialsLoopScheduler.add(Target_pracRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(FbRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(FbRoutineEachFrame());
      prac_trialsLoopScheduler.add(FbRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function pracLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(pracLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function pracLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var scheduleLoop;
function scheduleLoopLoopBegin(scheduleLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    scheduleLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_blocks, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'scheduleLoop'
    });
    psychoJS.experiment.addLoop(scheduleLoop); // add the loop to the experiment
    currentLoop = scheduleLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    scheduleLoop.forEach(function() {
      snapshot = scheduleLoop.getSnapshot();
    
      scheduleLoopLoopScheduler.add(importConditions(snapshot));
      scheduleLoopLoopScheduler.add(BlockBeginRoutineBegin(snapshot));
      scheduleLoopLoopScheduler.add(BlockBeginRoutineEachFrame());
      scheduleLoopLoopScheduler.add(BlockBeginRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      scheduleLoopLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      scheduleLoopLoopScheduler.add(trialsLoopScheduler);
      scheduleLoopLoopScheduler.add(trialsLoopEnd);
      scheduleLoopLoopScheduler.add(BlockEndRoutineBegin(snapshot));
      scheduleLoopLoopScheduler.add(BlockEndRoutineEachFrame());
      scheduleLoopLoopScheduler.add(BlockEndRoutineEnd(snapshot));
      scheduleLoopLoopScheduler.add(scheduleLoopLoopEndIteration(scheduleLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'block_a.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(FixRoutineBegin(snapshot));
      trialsLoopScheduler.add(FixRoutineEachFrame());
      trialsLoopScheduler.add(FixRoutineEnd(snapshot));
      trialsLoopScheduler.add(CueRoutineBegin(snapshot));
      trialsLoopScheduler.add(CueRoutineEachFrame());
      trialsLoopScheduler.add(CueRoutineEnd(snapshot));
      trialsLoopScheduler.add(TargetRoutineBegin(snapshot));
      trialsLoopScheduler.add(TargetRoutineEachFrame());
      trialsLoopScheduler.add(TargetRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function scheduleLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(scheduleLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function scheduleLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Fix_pracMaxDurationReached;
var Fix_pracMaxDuration;
var Fix_pracComponents;
function Fix_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fix_prac' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Fix_pracClock.reset();
    routineTimer.reset();
    Fix_pracMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_fix_prac
    fix_duration = 0.4 + Math.random()*1.2;
    psychoJS.experiment.addData('Fix_prac.started', globalClock.getTime());
    Fix_pracMaxDuration = null
    // keep track of which components have finished
    Fix_pracComponents = [];
    Fix_pracComponents.push(fix_timer_prac);
    
    Fix_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Fix_pracRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fix_prac' ---
    // get current time
    t = Fix_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_timer_prac* updates
    if (t >= 0.0 && fix_timer_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_timer_prac.tStart = t;  // (not accounting for frame time here)
      fix_timer_prac.frameNStart = frameN;  // exact frame index
      
      fix_timer_prac.setAutoDraw(true);
    }
    
    
    // if fix_timer_prac is active this frame...
    if (fix_timer_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + fix_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_timer_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fix_timer_prac.tStop = t;  // not accounting for scr refresh
      fix_timer_prac.frameNStop = frameN;  // exact frame index
      // update status
      fix_timer_prac.status = PsychoJS.Status.FINISHED;
      fix_timer_prac.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Fix_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Fix_pracRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fix_prac' ---
    Fix_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fix_prac.stopped', globalClock.getTime());
    // the Routine "Fix_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Cue_pracMaxDurationReached;
var cue_pos1;
var cue_pos2;
var Cue_pracMaxDuration;
var Cue_pracComponents;
function Cue_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Cue_prac' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Cue_pracClock.reset(routineTimer.getTime());
    routineTimer.add(0.400000);
    Cue_pracMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_cue_prac
    // Run 'Begin Routine' code from code_cue_prac
    // 假设 cue 变量已在之前定义
    // let cue_pos1, cue_pos2;  // 删除这行
    if (cue === "NC") {
        cue_pos1 = [0.0,  1.5];
        cue_pos2 = [0.0, -1.5];
    } else if (cue === "CC") {
        cue_pos1 = [0.0, 0.0];
        cue_pos2 = [0.0, 0.0];
    } else if (cue === "DC") {
        cue_pos1 = [0.0,  0.25];
        cue_pos2 = [0.0, -0.25];
    } else if (cue === "SC") {
        if (Math.random() >= 0.5) {
            cue_pos1 = [0.0,  0.25];
            cue_pos2 = [0.0,  0.25];
        } else {
            cue_pos1 = [0.0, -0.25];
            cue_pos2 = [0.0, -0.25];
        }
    }
    // 练习版本：用 _prac 组件
    text_1_cue_prac.pos = cue_pos1;
    text_2_cue_prac.pos = cue_pos2;
    
    psychoJS.experiment.addData('Cue_prac.started', globalClock.getTime());
    Cue_pracMaxDuration = 0.4
    // keep track of which components have finished
    Cue_pracComponents = [];
    Cue_pracComponents.push(cue_timer_prac);
    Cue_pracComponents.push(text_1_cue_prac);
    Cue_pracComponents.push(text_2_cue_prac);
    
    Cue_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Cue_pracRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Cue_prac' ---
    // get current time
    t = Cue_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > Cue_pracMaxDuration) {
        Cue_pracMaxDurationReached = true
        continueRoutine = false
    }
    
    // *cue_timer_prac* updates
    if (t >= 0.0 && cue_timer_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_timer_prac.tStart = t;  // (not accounting for frame time here)
      cue_timer_prac.frameNStart = frameN;  // exact frame index
      
      cue_timer_prac.setAutoDraw(true);
    }
    
    
    // if cue_timer_prac is active this frame...
    if (cue_timer_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_timer_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_timer_prac.tStop = t;  // not accounting for scr refresh
      cue_timer_prac.frameNStop = frameN;  // exact frame index
      // update status
      cue_timer_prac.status = PsychoJS.Status.FINISHED;
      cue_timer_prac.setAutoDraw(false);
    }
    
    
    // *text_1_cue_prac* updates
    if (t >= 0.0 && text_1_cue_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1_cue_prac.tStart = t;  // (not accounting for frame time here)
      text_1_cue_prac.frameNStart = frameN;  // exact frame index
      
      text_1_cue_prac.setAutoDraw(true);
    }
    
    
    // if text_1_cue_prac is active this frame...
    if (text_1_cue_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1_cue_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_1_cue_prac.tStop = t;  // not accounting for scr refresh
      text_1_cue_prac.frameNStop = frameN;  // exact frame index
      // update status
      text_1_cue_prac.status = PsychoJS.Status.FINISHED;
      text_1_cue_prac.setAutoDraw(false);
    }
    
    
    // *text_2_cue_prac* updates
    if (t >= 0.0 && text_2_cue_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2_cue_prac.tStart = t;  // (not accounting for frame time here)
      text_2_cue_prac.frameNStart = frameN;  // exact frame index
      
      text_2_cue_prac.setAutoDraw(true);
    }
    
    
    // if text_2_cue_prac is active this frame...
    if (text_2_cue_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2_cue_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_2_cue_prac.tStop = t;  // not accounting for scr refresh
      text_2_cue_prac.frameNStop = frameN;  // exact frame index
      // update status
      text_2_cue_prac.status = PsychoJS.Status.FINISHED;
      text_2_cue_prac.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Cue_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Cue_pracRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Cue_prac' ---
    Cue_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Cue_prac.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (Cue_pracMaxDurationReached) {
        Cue_pracClock.add(Cue_pracMaxDuration);
    } else {
        Cue_pracClock.add(0.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Target_pracMaxDurationReached;
var p;
var _key_resp_target_prac_allKeys;
var Target_pracMaxDuration;
var Target_pracComponents;
function Target_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Target_prac' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Target_pracClock.reset();
    routineTimer.reset();
    Target_pracMaxDurationReached = false;
    // update component parameters for each repeat
    text_target_prac.setText('>>>>>');
    // Run 'Begin Routine' code from code_target_prac
    // 用 text_target_prac（注意是下划线，不是大写的 Target_text）
    text_target_prac.text = target;
    
    let p;
    if (cue === "SC") {
        p = Math.sign(cue_pos1[1]);   // cue_pos1[1] 是 y 坐标
    } else {
        p = Math.random() < 0.5 ? 1 : -1;
    }
    
    text_target_prac.pos = [0.0, p * 0.25];
    key_resp_target_prac.keys = undefined;
    key_resp_target_prac.rt = undefined;
    _key_resp_target_prac_allKeys = [];
    psychoJS.experiment.addData('Target_prac.started', globalClock.getTime());
    Target_pracMaxDuration = 1.7
    // keep track of which components have finished
    Target_pracComponents = [];
    Target_pracComponents.push(target_timer_prac);
    Target_pracComponents.push(text_target_prac);
    Target_pracComponents.push(key_resp_target_prac);
    
    Target_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Target_pracRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Target_prac' ---
    // get current time
    t = Target_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > Target_pracMaxDuration) {
        Target_pracMaxDurationReached = true
        continueRoutine = false
    }
    
    // *target_timer_prac* updates
    if (t >= 0.0 && target_timer_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_timer_prac.tStart = t;  // (not accounting for frame time here)
      target_timer_prac.frameNStart = frameN;  // exact frame index
      
      target_timer_prac.setAutoDraw(true);
    }
    
    
    // if target_timer_prac is active this frame...
    if (target_timer_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_timer_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      target_timer_prac.tStop = t;  // not accounting for scr refresh
      target_timer_prac.frameNStop = frameN;  // exact frame index
      // update status
      target_timer_prac.status = PsychoJS.Status.FINISHED;
      target_timer_prac.setAutoDraw(false);
    }
    
    
    // *text_target_prac* updates
    if (t >= 0.0 && text_target_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_target_prac.tStart = t;  // (not accounting for frame time here)
      text_target_prac.frameNStart = frameN;  // exact frame index
      
      text_target_prac.setAutoDraw(true);
    }
    
    
    // if text_target_prac is active this frame...
    if (text_target_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_target_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_target_prac.tStop = t;  // not accounting for scr refresh
      text_target_prac.frameNStop = frameN;  // exact frame index
      // update status
      text_target_prac.status = PsychoJS.Status.FINISHED;
      text_target_prac.setAutoDraw(false);
    }
    
    
    // *key_resp_target_prac* updates
    if (t >= 0.0 && key_resp_target_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_target_prac.tStart = t;  // (not accounting for frame time here)
      key_resp_target_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_target_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target_prac.clearEvents(); });
    }
    
    // if key_resp_target_prac is active this frame...
    if (key_resp_target_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_target_prac.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _key_resp_target_prac_allKeys = _key_resp_target_prac_allKeys.concat(theseKeys);
      if (_key_resp_target_prac_allKeys.length > 0) {
        key_resp_target_prac.keys = _key_resp_target_prac_allKeys[_key_resp_target_prac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_target_prac.rt = _key_resp_target_prac_allKeys[_key_resp_target_prac_allKeys.length - 1].rt;
        key_resp_target_prac.duration = _key_resp_target_prac_allKeys[_key_resp_target_prac_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_target_prac.keys == correct) {
            key_resp_target_prac.corr = 1;
        } else {
            key_resp_target_prac.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Target_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Target_pracRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Target_prac' ---
    Target_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Target_prac.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_target_prac.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         key_resp_target_prac.corr = 1;  // correct non-response
      } else {
         key_resp_target_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_target_prac.corr, level);
    }
    psychoJS.experiment.addData('key_resp_target_prac.keys', key_resp_target_prac.keys);
    psychoJS.experiment.addData('key_resp_target_prac.corr', key_resp_target_prac.corr);
    if (typeof key_resp_target_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_target_prac.rt', key_resp_target_prac.rt);
        psychoJS.experiment.addData('key_resp_target_prac.duration', key_resp_target_prac.duration);
        routineTimer.reset();
        }
    
    key_resp_target_prac.stop();
    // the Routine "Target_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FbMaxDurationReached;
var FbMaxDuration;
var FbComponents;
function FbRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fb' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FbClock.reset(routineTimer.getTime());
    routineTimer.add(0.600000);
    FbMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_fb
    if ((key_resp_target_prac.corr === 1)) {
        fb_text = "\u6b63\u786e";
        fb_color = "green";
    } else {
        fb_text = "\u9519\u8bef";
        fb_color = "red";
    }
    
    text_fb.setColor(new util.Color(fb_color));
    text_fb.setText(fb_text);
    psychoJS.experiment.addData('Fb.started', globalClock.getTime());
    FbMaxDuration = null
    // keep track of which components have finished
    FbComponents = [];
    FbComponents.push(text_fb);
    
    FbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FbRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fb' ---
    // get current time
    t = FbClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_fb* updates
    if (t >= 0.0 && text_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fb.tStart = t;  // (not accounting for frame time here)
      text_fb.frameNStart = frameN;  // exact frame index
      
      text_fb.setAutoDraw(true);
    }
    
    
    // if text_fb is active this frame...
    if (text_fb.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_fb.tStop = t;  // not accounting for scr refresh
      text_fb.frameNStop = frameN;  // exact frame index
      // update status
      text_fb.status = PsychoJS.Status.FINISHED;
      text_fb.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FbComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FbRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fb' ---
    FbComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fb.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FbMaxDurationReached) {
        FbClock.add(FbMaxDuration);
    } else {
        FbClock.add(0.600000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AskPracMaxDurationReached;
var _key_resp_askprac_allKeys;
var AskPracMaxDuration;
var AskPracComponents;
function AskPracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AskPrac' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AskPracClock.reset();
    routineTimer.reset();
    AskPracMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_askprac.keys = undefined;
    key_resp_askprac.rt = undefined;
    _key_resp_askprac_allKeys = [];
    psychoJS.experiment.addData('AskPrac.started', globalClock.getTime());
    AskPracMaxDuration = null
    // keep track of which components have finished
    AskPracComponents = [];
    AskPracComponents.push(text_askprac);
    AskPracComponents.push(key_resp_askprac);
    
    AskPracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function AskPracRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AskPrac' ---
    // get current time
    t = AskPracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_askprac* updates
    if (t >= 0.0 && text_askprac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_askprac.tStart = t;  // (not accounting for frame time here)
      text_askprac.frameNStart = frameN;  // exact frame index
      
      text_askprac.setAutoDraw(true);
    }
    
    
    // if text_askprac is active this frame...
    if (text_askprac.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_askprac* updates
    if (t >= 0.0 && key_resp_askprac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_askprac.tStart = t;  // (not accounting for frame time here)
      key_resp_askprac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_askprac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_askprac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_askprac.clearEvents(); });
    }
    
    // if key_resp_askprac is active this frame...
    if (key_resp_askprac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_askprac.getKeys({
        keyList: typeof ['m','z'] === 'string' ? [['m','z']] : ['m','z'], 
        waitRelease: false
      });
      _key_resp_askprac_allKeys = _key_resp_askprac_allKeys.concat(theseKeys);
      if (_key_resp_askprac_allKeys.length > 0) {
        key_resp_askprac.keys = _key_resp_askprac_allKeys[_key_resp_askprac_allKeys.length - 1].name;  // just the last key pressed
        key_resp_askprac.rt = _key_resp_askprac_allKeys[_key_resp_askprac_allKeys.length - 1].rt;
        key_resp_askprac.duration = _key_resp_askprac_allKeys[_key_resp_askprac_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AskPracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AskPracRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AskPrac' ---
    AskPracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('AskPrac.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_askprac.corr, level);
    }
    psychoJS.experiment.addData('key_resp_askprac.keys', key_resp_askprac.keys);
    if (typeof key_resp_askprac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_askprac.rt', key_resp_askprac.rt);
        psychoJS.experiment.addData('key_resp_askprac.duration', key_resp_askprac.duration);
        routineTimer.reset();
        }
    
    key_resp_askprac.stop();
    // the Routine "AskPrac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var QuitPracMaxDurationReached;
var QuitPracMaxDuration;
var QuitPracComponents;
function QuitPracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'QuitPrac' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    QuitPracClock.reset();
    routineTimer.reset();
    QuitPracMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_quitprac
    if ((key_resp_askprac.keys === "z")) {
        pracLoop.finished = true;
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('QuitPrac.started', globalClock.getTime());
    QuitPracMaxDuration = null
    // keep track of which components have finished
    QuitPracComponents = [];
    
    QuitPracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function QuitPracRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'QuitPrac' ---
    // get current time
    t = QuitPracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    QuitPracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function QuitPracRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'QuitPrac' ---
    QuitPracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('QuitPrac.stopped', globalClock.getTime());
    // the Routine "QuitPrac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlockBeginMaxDurationReached;
var BlockBeginMaxDuration;
var BlockBeginComponents;
function BlockBeginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockBegin' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BlockBeginClock.reset();
    routineTimer.reset();
    BlockBeginMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_bb
    n_this_block = (n_this_block + 1);
    
    psychoJS.experiment.addData('BlockBegin.started', globalClock.getTime());
    BlockBeginMaxDuration = null
    // keep track of which components have finished
    BlockBeginComponents = [];
    
    BlockBeginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BlockBeginRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockBegin' ---
    // get current time
    t = BlockBeginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BlockBeginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockBeginRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockBegin' ---
    BlockBeginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BlockBegin.stopped', globalClock.getTime());
    // the Routine "BlockBegin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixMaxDurationReached;
var FixMaxDuration;
var FixComponents;
function FixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fix' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FixClock.reset();
    routineTimer.reset();
    FixMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_fix
    fix_duration = 0.4 + Math.random() * 1.2;
    fix_timer.autoDraw = true;
    
    psychoJS.experiment.addData('Fix.started', globalClock.getTime());
    FixMaxDuration = fix_duration
    // keep track of which components have finished
    FixComponents = [];
    FixComponents.push(fix_timer);
    
    FixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fix' ---
    // get current time
    t = FixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > FixMaxDuration) {
        FixMaxDurationReached = true
        continueRoutine = false
    }
    
    // *fix_timer* updates
    if (t >= 0.0 && fix_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_timer.tStart = t;  // (not accounting for frame time here)
      fix_timer.frameNStart = frameN;  // exact frame index
      
      fix_timer.setAutoDraw(true);
    }
    
    
    // if fix_timer is active this frame...
    if (fix_timer.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + fix_duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fix_timer.tStop = t;  // not accounting for scr refresh
      fix_timer.frameNStop = frameN;  // exact frame index
      // update status
      fix_timer.status = PsychoJS.Status.FINISHED;
      fix_timer.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fix' ---
    FixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fix.stopped', globalClock.getTime());
    // the Routine "Fix" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CueMaxDurationReached;
var CueMaxDuration;
var CueComponents;
function CueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Cue' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CueClock.reset(routineTimer.getTime());
    routineTimer.add(0.400000);
    CueMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_cue
    if (cue === "NC") {
        cue_pos1 = [0.0,  1.5];  // 隐藏 Cue_text_1
        cue_pos2 = [0.0, -1.5];  // 隐藏 Cue_text_2
    } else if (cue === "CC") {
        // 两个 cue 文本都定位到中心
        cue_pos1 = [0.0, 0.0];
        cue_pos2 = [0.0, 0.0];
    } else if (cue === "DC") {
        cue_pos1 = [0.0,  0.25];
        cue_pos2 = [0.0, -0.25];
    } else if (cue === "SC") {
        if (Math.random() >= 0.5) {  // 替代 np.random.rand()
            cue_pos1 = [0.0,  0.25];
            cue_pos2 = [0.0,  0.25];
        } else {
            cue_pos1 = [0.0, -0.25];
            cue_pos2 = [0.0, -0.25];
        }
    }
    
    // 更新组件位置（假设 text_1_cue 和 text_2_cue 是 PsychoJS 组件对象）
    text_1_cue.pos = cue_pos1;
    text_2_cue.pos = cue_pos2;
    psychoJS.experiment.addData('Cue.started', globalClock.getTime());
    CueMaxDuration = 0.4
    // keep track of which components have finished
    CueComponents = [];
    CueComponents.push(cue_timer);
    CueComponents.push(text_1_cue);
    CueComponents.push(text_2_cue);
    
    CueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Cue' ---
    // get current time
    t = CueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > CueMaxDuration) {
        CueMaxDurationReached = true
        continueRoutine = false
    }
    
    // *cue_timer* updates
    if (t >= 0.0 && cue_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_timer.tStart = t;  // (not accounting for frame time here)
      cue_timer.frameNStart = frameN;  // exact frame index
      
      cue_timer.setAutoDraw(true);
    }
    
    
    // if cue_timer is active this frame...
    if (cue_timer.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_timer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_timer.tStop = t;  // not accounting for scr refresh
      cue_timer.frameNStop = frameN;  // exact frame index
      // update status
      cue_timer.status = PsychoJS.Status.FINISHED;
      cue_timer.setAutoDraw(false);
    }
    
    
    // *text_1_cue* updates
    if (t >= 0.0 && text_1_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1_cue.tStart = t;  // (not accounting for frame time here)
      text_1_cue.frameNStart = frameN;  // exact frame index
      
      text_1_cue.setAutoDraw(true);
    }
    
    
    // if text_1_cue is active this frame...
    if (text_1_cue.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_1_cue.tStop = t;  // not accounting for scr refresh
      text_1_cue.frameNStop = frameN;  // exact frame index
      // update status
      text_1_cue.status = PsychoJS.Status.FINISHED;
      text_1_cue.setAutoDraw(false);
    }
    
    
    // *text_2_cue* updates
    if (t >= 0.0 && text_2_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2_cue.tStart = t;  // (not accounting for frame time here)
      text_2_cue.frameNStart = frameN;  // exact frame index
      
      text_2_cue.setAutoDraw(true);
    }
    
    
    // if text_2_cue is active this frame...
    if (text_2_cue.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_2_cue.tStop = t;  // not accounting for scr refresh
      text_2_cue.frameNStop = frameN;  // exact frame index
      // update status
      text_2_cue.status = PsychoJS.Status.FINISHED;
      text_2_cue.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Cue' ---
    CueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Cue.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (CueMaxDurationReached) {
        CueClock.add(CueMaxDuration);
    } else {
        CueClock.add(0.400000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TargetMaxDurationReached;
var _key_resp_target_allKeys;
var TargetMaxDuration;
var TargetComponents;
function TargetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Target' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    TargetClock.reset();
    routineTimer.reset();
    TargetMaxDurationReached = false;
    // update component parameters for each repeat
    text_target.setText('>>>>>');
    // Run 'Begin Routine' code from code_target
    // 步骤1：设置文本内容（假设 target 是已定义的字符串变量）
    text_target.text = target;
    
    // 步骤2：确定 p 的值
    let p;
    if (cue === "SC") {
        // 用 Math.sign() 替代 np.sign
        p = Math.sign(cue_pos1[1]);   // cue_pos1[1] 是 y 坐标（例如 0.25 或 -0.25）
    } else {
        // 用 Math.random() < 0.5 替代 np.random.choice([-1,1])
        p = Math.random() < 0.5 ? 1 : -1;
    }
    
    // 步骤3：设置位置（p*0.25 得到 ±0.25）
    text_target.pos = [0.0, p * 0.25];
    key_resp_target.keys = undefined;
    key_resp_target.rt = undefined;
    _key_resp_target_allKeys = [];
    psychoJS.experiment.addData('Target.started', globalClock.getTime());
    TargetMaxDuration = 1.7
    // keep track of which components have finished
    TargetComponents = [];
    TargetComponents.push(target_timer);
    TargetComponents.push(text_target);
    TargetComponents.push(key_resp_target);
    
    TargetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TargetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Target' ---
    // get current time
    t = TargetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > TargetMaxDuration) {
        TargetMaxDurationReached = true
        continueRoutine = false
    }
    
    // *target_timer* updates
    if (t >= 0.0 && target_timer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_timer.tStart = t;  // (not accounting for frame time here)
      target_timer.frameNStart = frameN;  // exact frame index
      
      target_timer.setAutoDraw(true);
    }
    
    
    // if target_timer is active this frame...
    if (target_timer.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *text_target* updates
    if (t >= 0.0 && text_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_target.tStart = t;  // (not accounting for frame time here)
      text_target.frameNStart = frameN;  // exact frame index
      
      text_target.setAutoDraw(true);
    }
    
    
    // if text_target is active this frame...
    if (text_target.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_target* updates
    if (t >= 0.0 && key_resp_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_target.tStart = t;  // (not accounting for frame time here)
      key_resp_target.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_target.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target.clearEvents(); });
    }
    
    // if key_resp_target is active this frame...
    if (key_resp_target.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_target.getKeys({
        keyList: typeof ['f','j'] === 'string' ? [['f','j']] : ['f','j'], 
        waitRelease: false
      });
      _key_resp_target_allKeys = _key_resp_target_allKeys.concat(theseKeys);
      if (_key_resp_target_allKeys.length > 0) {
        key_resp_target.keys = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].name;  // just the last key pressed
        key_resp_target.rt = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].rt;
        key_resp_target.duration = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_target.keys == correct) {
            key_resp_target.corr = 1;
        } else {
            key_resp_target.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TargetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TargetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Target' ---
    TargetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Target.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_target.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         key_resp_target.corr = 1;  // correct non-response
      } else {
         key_resp_target.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_target.corr, level);
    }
    psychoJS.experiment.addData('key_resp_target.keys', key_resp_target.keys);
    psychoJS.experiment.addData('key_resp_target.corr', key_resp_target.corr);
    if (typeof key_resp_target.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_target.rt', key_resp_target.rt);
        psychoJS.experiment.addData('key_resp_target.duration', key_resp_target.duration);
        routineTimer.reset();
        }
    
    key_resp_target.stop();
    // the Routine "Target" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlockEndMaxDurationReached;
var _key_resp_BlockEnd_allKeys;
var BlockEndMaxDuration;
var BlockEndComponents;
function BlockEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockEnd' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BlockEndClock.reset();
    routineTimer.reset();
    BlockEndMaxDurationReached = false;
    // update component parameters for each repeat
    text_BlockEnd.setText('');
    key_resp_BlockEnd.keys = undefined;
    key_resp_BlockEnd.rt = undefined;
    _key_resp_BlockEnd_allKeys = [];
    // Run 'Begin Routine' code from code_blockend
    fix_timer.autoDraw = false;
    fb_blockend = `
    你完成了第${n_this_block}/${n_blocks}组，
    可以稍作休息。
    [按空格键继续...]`
    ;
    text_BlockEnd.text = fb_blockend;
    
    psychoJS.experiment.addData('BlockEnd.started', globalClock.getTime());
    BlockEndMaxDuration = null
    // keep track of which components have finished
    BlockEndComponents = [];
    BlockEndComponents.push(text_BlockEnd);
    BlockEndComponents.push(key_resp_BlockEnd);
    
    BlockEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BlockEndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockEnd' ---
    // get current time
    t = BlockEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_BlockEnd* updates
    if (t >= 0.0 && text_BlockEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_BlockEnd.tStart = t;  // (not accounting for frame time here)
      text_BlockEnd.frameNStart = frameN;  // exact frame index
      
      text_BlockEnd.setAutoDraw(true);
    }
    
    
    // if text_BlockEnd is active this frame...
    if (text_BlockEnd.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_BlockEnd* updates
    if (t >= 0.0 && key_resp_BlockEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_BlockEnd.tStart = t;  // (not accounting for frame time here)
      key_resp_BlockEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_BlockEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_BlockEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_BlockEnd.clearEvents(); });
    }
    
    // if key_resp_BlockEnd is active this frame...
    if (key_resp_BlockEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_BlockEnd.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_BlockEnd_allKeys = _key_resp_BlockEnd_allKeys.concat(theseKeys);
      if (_key_resp_BlockEnd_allKeys.length > 0) {
        key_resp_BlockEnd.keys = _key_resp_BlockEnd_allKeys[_key_resp_BlockEnd_allKeys.length - 1].name;  // just the last key pressed
        key_resp_BlockEnd.rt = _key_resp_BlockEnd_allKeys[_key_resp_BlockEnd_allKeys.length - 1].rt;
        key_resp_BlockEnd.duration = _key_resp_BlockEnd_allKeys[_key_resp_BlockEnd_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BlockEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockEndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockEnd' ---
    BlockEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BlockEnd.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_BlockEnd.corr, level);
    }
    psychoJS.experiment.addData('key_resp_BlockEnd.keys', key_resp_BlockEnd.keys);
    if (typeof key_resp_BlockEnd.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_BlockEnd.rt', key_resp_BlockEnd.rt);
        psychoJS.experiment.addData('key_resp_BlockEnd.duration', key_resp_BlockEnd.duration);
        routineTimer.reset();
        }
    
    key_resp_BlockEnd.stop();
    // the Routine "BlockEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_end);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    
    // if text_end is active this frame...
    if (text_end.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_end.tStop = t;  // not accounting for scr refresh
      text_end.frameNStop = frameN;  // exact frame index
      // update status
      text_end.status = PsychoJS.Status.FINISHED;
      text_end.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
