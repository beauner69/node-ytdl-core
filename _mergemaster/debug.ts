import { DefaultLogging, Receiver, Uffizi } from '@zerolabs/uffizi';
import {
  ConsoleReporter,
  DefaultConsoleFormatter,
} from '@zerolabs/uffizi/exports/ConsoleReporter';

export const deb = Receiver('mergemaster', { emoji: '🔫' });
export const official = Receiver('official', { emoji: '$' });

// const debugMode = 'Official'; // Normal selection
// const debugMode = 'LogAll'; // Normal selection
const debugMode = 'LogMost'; // Normal selection

const UffiziReceivers = {
  '*': 1,
  uffizi: 1,
  console: 1,
  fatpackage: 1,
  official: 1,
  nodemods: 1,
};

const Setup = Uffizi.appInit(UffiziReceivers);
Setup.filter.AddVariant('LogAll', {
  ...DefaultLogging(UffiziReceivers, 'log'),
});

Setup.filter.AddVariant('LogMost', {
  ...DefaultLogging(UffiziReceivers, 'log'),
  nodemods: 'off',
  uffizi: 'off',
});

Setup.filter.AddVariant('Official', {
  ...DefaultLogging(UffiziReceivers, 'off'),
  official: 'log',
});

const rConsole = new ConsoleReporter({
  formatter: packet => {
    if (packet.origin.name === 'official') return packet.data;
    return DefaultConsoleFormatter(packet);
  },
});

Uffizi.addReporter(rConsole, debugMode);
