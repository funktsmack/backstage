import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const SvgSettings = (props: SvgIconProps) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.424 2a.501.501 0 00-.494.418l-.284 1.705a7.911 7.911 0 00-1.41.38L8.135 3.169a.5.5 0 00-.637-.115l-.996.576a.499.499 0 00-.219.607l.606 1.618c-.376.312-.723.66-1.035 1.035l-1.618-.606a.499.499 0 00-.607.219l-.576.996a.5.5 0 00.115.637l1.336 1.101a7.911 7.911 0 00-.381 1.41l-1.705.284a.501.501 0 00-.418.494v1.152c0 .244.177.454.418.494l1.705.284c.084.486.213.957.38 1.41l-1.335 1.101a.5.5 0 00-.115.637l.576.996c.122.212.38.305.607.219l1.618-.606c.312.376.66.723 1.035 1.035l-.606 1.618a.5.5 0 00.219.607l.996.576a.502.502 0 00.637-.115l1.1-1.336c.453.168.924.297 1.411.381l.284 1.705c.04.241.249.418.494.418h1.152a.501.501 0 00.494-.418l.284-1.705a7.911 7.911 0 001.41-.38l1.101 1.335a.5.5 0 00.637.115l.996-.576a.499.499 0 00.219-.607l-.606-1.618c.376-.312.723-.66 1.035-1.035l1.618.606a.5.5 0 00.607-.219l.576-.996a.502.502 0 00-.115-.637l-1.336-1.1c.168-.453.297-.924.381-1.411l1.705-.284a.501.501 0 00.418-.494v-1.152a.501.501 0 00-.418-.494l-1.705-.284a7.911 7.911 0 00-.38-1.41l1.335-1.101a.5.5 0 00.115-.637l-.576-.996a.499.499 0 00-.607-.219l-1.618.606a8.092 8.092 0 00-1.035-1.035l.606-1.618a.5.5 0 00-.219-.607l-.996-.576a.502.502 0 00-.637.115l-1.1 1.336a7.912 7.912 0 00-1.411-.381l-.284-1.705A.501.501 0 0012.576 2h-1.152zM11 6.09v3.084A3 3 0 009 12a3 3 0 00.05.549l-2.671 1.54A6.01 6.01 0 016 12a5.978 5.978 0 015-5.91zm2 0a5.978 5.978 0 014.62 8.002l-2.673-1.545A3 3 0 0015 12a3 3 0 00-2-2.824V6.09zm.947 8.187l2.682 1.55A5.979 5.979 0 0112 18a5.979 5.979 0 01-4.629-2.174l2.68-1.547A3 3 0 0012 15a3 3 0 001.947-.723z" />,
  );

export default SvgSettings;