# usage: python3 setfb.py <display|text> <weight> <size-adjust %> — rewrite one R-01 fallback base face (overrides re-derived)
import re,sys
fam,w,v=sys.argv[1],sys.argv[2],float(sys.argv[3])
p='stardust/prototypes/css/canon.css'; s=open(p).read()
M={'display':{'500':(93,26),'600':(93,26),'700':(94,26)},'text':{'400':(98,25),'500':(99,26),'600':(99,26),'700':(100,26)}}
a,d=M[fam][w]
s,n=re.subn(r'(@font-face \{ font-family: nhg-'+fam+r'-fallback; font-weight: '+w+r'; src: [^;]+; )size-adjust: [\d.]+%; ascent-override: [\d.]+%; descent-override: [\d.]+%',lambda m:m.group(1)+f'size-adjust: {v}%; ascent-override: {a/v*100:.2f}%; descent-override: {d/v*100:.2f}%',s)
assert n==1,n
open(p,'w').write(s)
