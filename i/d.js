import { A210, A211 } from "./a";
import { set, get, unset, isEmpty } from "lodash";
import { C7 } from "./c";
export let D0 = A211({
    name: "$",
    initialState: {
      _0: null,
      _1: null,
      _2: [],
      _3: null,
      _4: null,
      _5: null,
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
      _2001(_2, { payload }) {
        _2._2.push(payload);
      },
      _3000(_3, { payload }) {
        _3._3 = payload;
      },
      _3001(_3, { payload }) {
        _3._3 = _3._2.filter((_3) => _3.AA0 === payload)[0];
        // console.log(_3._3);
      },
      _3002(_3) {
        let _0 = _3._2.findIndex((_2) => _2.AA0 === _3._3.AA0);
        _3._2.splice(_0, 1, _3._3);
      },
      _4000(_4) {
        _4._4 = _4._3.AB2;
      },
      _4001(_4, { payload }) {
        let { AB4, AB0 } = payload;
        let _40 = _4._4;
        set(_40, AB4, {
          AB0,
          AB1: [],
        });
      },
      _4002(_4, { payload }) {
        let { AB4, AB0 } = payload;
        let _40 = _4._4;
        let _41 = get(_40, AB4);
        set(_40, AB4, {
          ..._41,
          AB0: {
            ..._41.AB0,
            ...AB0,
          },
        });
      },
      _4003(_4, { payload }) {
        let _40 = C7(payload),
          _41 = _40.indexOf("."),
          _42 = payload.slice(0, _40.length - 1 - _41),
          _43 = _4._4;
        unset(_43, payload);
        if (_42 === payload) _43.AB1 = _43.AB1.filter((_) => _ !== undefined);
        else {
          let _44 = get(_43, _42);
          _44.AB1 = _44.AB1.filter((_) => _ !== undefined);
          set(_43, _42, _44);
        }
      },
      _4004(_4) {
        _4._3.AB2 = _4._4;
      },
      _5000(_5, { payload }) {
        let _50 = _5._4;
        if (!isEmpty(payload)) _50 = get(_50, payload);
        console.log(_50);
        _5._5 = _50;
      },
      _5001(_5, { payload }) {
        _5._5 = {
          ..._5._5,
          ...payload,
        };
      },
    },
  }),
  {
    _0000,
    _1000,
    _2000,
    _2001,
    _3000,
    _3001,
    _3002,
    _4000,
    _4001,
    _4002,
    _4003,
    _4004,
    _5000,
    _5001,
  } = D0.actions,
  _0 = ({ $: { _0 } }) => _0,
  _1 = ({ $: { _1 } }) => _1,
  _2 = ({ $: { _2 } }) => _2,
  _3 = ({ $: { _3 } }) => _3,
  _4 = ({ $: { _4 } }) => _4,
  _5 = ({ $: { _5 } }) => _5;
export let D1 = A210({
  reducer: {
    $: D0.reducer,
  },
});
