import * as React from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from '@chrisoakman/chessboardjs';

export default function ChessBoard() {
    const chess = Chessboard('board1', 'start');
    return (<div id="board1" style="width: 400px"></div>);
}