# fork-canary

A deliberately tiny upstream used to exercise the AEGIS `do_sandbox` fork-mode
pipeline end to end: fork into Stackbilt-dev, run an agent task in a sandbox,
verify it with an acceptance gate, and open a PR back here.

`slugify` has a known bug: runs of separators produce repeated dashes
(`slugify('a  b')` returns `a--b`).

Separator runs now collapse to one dash.
