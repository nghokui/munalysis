import React, { Component } from 'react';
import { CP_EDM } from '../misc/cpalettes';
const PI = 3.1415926;

export default class Munode extends Component {
  constructor(props) {
    super(props);
    this.renderSlice = this.renderSlice.bind(this);
  }
  renderSlice(noSlices, sliceNo, factor) {
    const cx = this.props.centerX;
    const cy = this.props.centerY;
    const cr = this.props.radius;

    const angleOffset = PI / 2  ;
    const ang1 = ((sliceNo-1) * (2*PI) / noSlices) - angleOffset;
    const ang2 = ((sliceNo) * (2 * PI) / noSlices) - angleOffset;

    const sliceDefinition = [
      'M', this.props.centerX, this.props.centerY,
      'L', cx + factor * cr * Math.cos(ang1), cy + factor* cr * Math.sin(ang1),
      'A', this.props.radius, this.props.radius, (sliceNo-1) * 360.0 / noSlices,
      0, 1, cx + factor * cr * Math.cos(ang2), cy + factor * cr * Math.sin(ang2),
      'Z'
    ].join(' ');

    return sliceDefinition;
  }

  render() {
    const cx = this.props.centerX;
    const cy = this.props.centerY;
    const cr = this.props.radius;

    const sliceData = this.props.mdata.split(' ');
    const allSlices = sliceData.map((mprop, i) => {
      return (
        <a key={`munodeSliceB${i}`}>
          <path d={this.renderSlice(9, i + 1, 1)} stroke="#151515" strokeWidth="0" fill="none" />
          <path d={this.renderSlice(9, i + 1, mprop)} stroke="#151515" strokeWidth="1" fill={CP_EDM[i+1]} />
        </a>
      );
    });

    // for (var i=0; i<9; i++) {
    //   allSlices.push(
    //     <path key={`munodeSlice${i}`} d={this.renderSlice(9, i + 1)} stroke="blue" strokeWidth="1" fill="none" />
    //   );
    // }

    return (
      <g id="color-scheme-edm">
        <circle cx={cx} cy={cy} r={cr} stroke="black" strokeWidth="0" fill={CP_EDM.background} />
        {allSlices}
      </g>
    );
  }
}
