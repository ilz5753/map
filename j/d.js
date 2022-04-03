import { isEmpty, get, set } from "lodash";
import { A210, A211 } from "./a";

export let D0 = A211({
    name: "$",
    initialState: {
      _0: null,
      _1: null,
      _2: null,
      _3: [],
      _4: null,
      _5: null,
      _6: null,
      _7: null,
      _8: null,
      _9: null,
      _10: null,
      _11: [],
    },
    reducers: {
      _0000(_0, { payload }) {
        _0._0 = payload;
      },
      _1000(_1, { payload }) {
        _1._1 = payload;
      },
      _2000(_2, { payload }) {
        _2._2 = payload;
      },
      _3000(_3, { payload }) {
        _3._3.push(payload);
      },
      //    TODO:   fix here => u a l
      _3001(_3, { payload }) {
        let {} = payload;
        _3._3.push(payload);
      },
      //    TODO:   fix here => d a l
      _3002(_3, { payload }) {
        _3._3.push(payload);
      },
      _4000(_4, { payload }) {
        _4._4 = _4._3.filter((_3) => _3.AA4 === payload)[0];
        // console.log(_4._4);
      },
      _5000(_5) {
        _5._5 = _5._4.AA11;
        // console.log(_5._5);
      },
      _5001(_5) {
        _5._4.AA11 = _5._5;
        _5._3 = _5._3.map((_3) => {
          if (_3.AA4 === _5._4.AA4) return _5._4;
          return _3;
        });
        // console.log(_5._5);
      },
      _6000(_6, { payload }) {
        let _60 = _6._5;
        if (!isEmpty(payload)) _60 = get(_60, payload);
        // console.log(_60);
        _6._6 = _60;
        // console.log(_5._5);
      },
      _6001(_6, { payload }) {
        let _50 = _6._6,
          { AA2 } = _50.AA0,
          _60 = {
            AA0: { ..._50.AA0, ...payload.AA0 },
            AA1: payload.AA1,
          },
          _61 = _6._5;
        // console.log("AA2 : ", AA2);
        // console.log("\n\nbefore\n\n");
        // console.log(_60);
        // if (!isEmpty(AA2)) set(_50, AA2, _60);
        // _6._5 = _60;
        // console.log(_60);
        // console.log("\n\nafter\n\n");
        // console.log(_60);
        if (!isEmpty(AA2)) set(_61, AA2, _60);
        else _61 = _60;
        // console.log(_61);
        _6._5 = _61;
      },
      _7000(_7) {
        _7._7 = _7._4.AA11.AA0.AA7.AA8;
      },
      _7001(_7, { payload }) {
        let _70 = _7._7;
        if (!isEmpty(payload)) _70 = get(_70, payload);
        // console.log(_70);
        _7._7 = _70;
        // console.log(_5._5);
      },
      _7002(_7) {
        _7._4.AA11.AA0.AA7.AA8 = _7._7;
      },
      _8000(_8, { payload }) {
        _8._8 = payload;
      },
      _8001(_8, { payload }) {
        let { AA1, AA2, AA4, AA12 } = payload;
        // console.log(payload);
        // console.log(_8._7.AA4.AA4);
        _8._7.AA4.AA4 = _8._7.AA4.AA4.map((AA5) => {
          if (AA5.AA0 === AA1) {
            console.log(AA5);
            let _80 = AA5.AA1;
            if (AA12) _80 = _80.filter((_80) => _80.AA4 !== AA4);
            else _80.push({ AA0: AA2, AA1: AA4 });
            return { AA0: AA1, AA1: _80 };
          }
          return AA5;
        });
        // console.log(_8._7.AA4.AA4);
      },
      _9000(_9, { payload }) {
        _9._9 = payload;
      },
      _10000(_10) {
        _10._10 = _10._7.AA4.AA4;
        // console.log(_10._10);
      },
      _10001(_10, { payload }) {
        _10._10.push(payload);
      },
      _10002(_10, { payload }) {
        _10._10 = _10._10.filter((_11) => _11.AA0 !== payload);
      },
      _10003(_10, { payload }) {
        _10._10 = _10._10.map((_11) => {
          if (_11.AA0 === payload.AA0) return { ..._11, ...payload };
          return _11;
        });
      },
      _10004(_10, { payload }) {
        let { AA2, AA4 } = payload;
        console.log(payload);
        // console.log(_10._8);
        // console.log(payload);
        // _10._8.AA15 = payload.AA4;
        // let _12 = _10._10.map((_11) => _11.AA0);
        // console.log(_12);
        // console.log("\nbefore\n");
        // console.log(_10._10);
        // if (_12.includes(AA1)) {
        //   let _13 = _12.findIndex((_12) => _12 === AA1);
        //   console.log(_13);
        //   let _14 = _10._10[_13].AA1,
        //     _15 = _14.map((_15) => _15.AA0);
        //   if (_15.includes(AA2)) {
        //     _14 = _14.map((_14) => {
        //       if (_14.AA0 === AA2) return { ..._14, AA1: AA4 };
        //       return _14;
        //     });
        //   } else _14.push({ AA0: AA2, AA1: AA4 });
        //   console.log(_14);
        //   _10._10[_13].AA1 = _14;
        //   console.log("\nafter\n");
        //   console.log(_10._10);
        //   _10._7.AA4.AA4 = _10._10;
        // }
        let _11 = _10._11.map((_11) => _11.AA0);
        if (_11.includes(AA2)) {
          let _12 = _11.findIndex((_11) => _11 === AA2);
          console.log(_12);
          _10._11[_12].AA1 = AA4;
        } else _10._11.push({ AA0: AA2, AA1: AA4 });
        console.log(_10._11);
      },
      _10005(_10, { payload }) {
        let _11 = _10._10
          .map((_10) => _10.AA0)
          .findIndex((_11) => _11 === payload);
        console.log(_11);
        _10._10[_11].AA1 = _10._11;
        console.log(_10._10);
        _10._7.AA4.AA4 = _10._10;
        console.log(_10._7);
      },
      _11000(_11, { payload }) {
        let _12 = _11._7.AA4.AA4.filter((_10) => _10.AA0 === payload);
        console.log(_12);
        _11._11 = _12.AA1;
      },
      _11001(_11) {
        _11._11 = [];
      },
    },
  }),
  {
    _0000,
    _1000,
    _2000,
    _3000,
    _3001,
    _3002,
    _4000,
    _5000,
    _5001,
    _6000,
    _6001,
    _7000,
    _7001,
    _7002,
    _8000,
    _8001,
    _9000,
    _10000,
    _10001,
    _10002,
    _10003,
    _10004,
    _10005,
    _11000,
    _11001,
  } = D0.actions,
  _0 = ({ $: { _0 } }) => _0,
  _1 = ({ $: { _1 } }) => _1,
  _2 = ({ $: { _2 } }) => _2,
  _3 = ({ $: { _3 } }) => _3,
  _4 = ({ $: { _4 } }) => _4,
  _5 = ({ $: { _5 } }) => _5,
  _6 = ({ $: { _6 } }) => _6,
  _7 = ({ $: { _7 } }) => _7,
  _8 = ({ $: { _8 } }) => _8,
  _9 = ({ $: { _9 } }) => _9,
  _10 = ({ $: { _10 } }) => _10,
  _11 = ({ $: { _11 } }) => _11;

export let D1 = A210({
  reducer: {
    $: D0.reducer,
  },
});
