// "Aztec Challenge Paul Norman"
// code @by masi
// @url https://suno.com/hook/851ea815-84a5-4785-bf7a-222654534be7
setcps(210 /60) //setcpm(210)

//NOTES
const ambient_40="<a1>/40"
const ambient_16="<a1>/16"
const turiruriru="<[e5 g5]*5 e5>/4"
const galoping="<a1 ~ ~ ~ a1 ~ a1 ~>*4"
const bass="<a1@2 c2 b1 a#1@2 d2 c2>"
const bass_2="<a2 ~ a2 b2 a2 ~ a2 b2 a2 ~ a2 b2 c3 b2 a2 g2 b2 ~ b2 c3 b2 ~ b2 c3 b2 ~ b2 c3 b2 a2 g2 f#2>*1.5"
const bass_3="<f2@2 d#3 ~ c3@2 d#3 f3>*1.5"
const melody_1="<a3 f4 e4 d4 e4 f4 e4 d4 a#3 f4 e4 d4 e4 f4 e4 d4>*2"
const melody_2="<~ f3 e3 d3 e3 f3 e3 d3 ~ f3 e3 d3 e3 f3 e3 d3 ~>"
const melody_2_5="<b4>"
const melody_3="<c5@3 d5 d#5@3 e5 a5@2 g5 f#5 d#5@3 e5 a5@2 g5 f#5 d#5@3 b4>/2.667"
const melody_3_5="<a4>/21.33"
//SAMPLES
await samples({run: 'samples/aztec_challenge/AC_run.wav', aztec:'samples/aztec_challenge/AC_aztec_challenge.wav'}, 'https://raw.githubusercontent.com/masipro/masi_strudel/main/');
$: arrange([200,silence],[1,sound("aztec")],[85.33, silence],[1,sound("run")],[104,66, silence])
//BACKGROUND
$: arrange(
  [40,note(ambient_40.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [16,note(galoping).sound('gm_lead_2_sawtooth').lpf(400)],
  [48,note(galoping).sound('gm_lead_2_sawtooth').lpf(1250)],
  [16, silence],
  [16,note(ambient_16.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [64,note(bass_2.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [21.33,note(bass_3.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [64,note(bass_2.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [21.33,note(bass_3.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [64,note(bass_2.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  [21.33,note(bass_3.sound('gm_lead_2_sawtooth').lpf(1250)).pan(0.40)],
  //[9999, silence],
)._scope({ pos: 0.50, scale: 1})

//LEAD
$: arrange(
  [16, silence],
  [8, note(turiruriru).sound("triangle")],
  [8, silence],
  [8, note(turiruriru).sound("triangle")],
  [32, silence],
  [32, stack(note(bass).sound('gm_lead_2_sawtooth'),note(melody_1).sound('supersaw'))],
  [16, stack(note(bass).slow(2).sound("gm_lead_2_sawtooth").lpf(1250),note(melody_2).sound('triangle'))],
  [8, silence],
  [8, note(turiruriru).sound("triangle")],
  [64, silence],[21.33, silence],
  [64, note(melody_3).sound('triangle')],
  [21.33, note(melody_3_5).sound('triangle')],
  [64, note(melody_3).sound('triangle')],
  [21.33, note(melody_3_5).sound('triangle')],
  //[9999, silence], 
)._scope({ pos: 0.50, scale: 1 })
$: all(pianoroll({cycles: 16, labels: 1, background: "transparent"}))
