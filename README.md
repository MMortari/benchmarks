# Benchmark

## Go Results

10 VUs

```text
data_received..................: 103 kB 1.3 kB/s
data_sent......................: 134 kB 1.7 kB/s
http_req_blocked...............: avg=17.15µs min=2µs    med=6µs    max=2.38ms  p(90)=8µs    p(95)=9µs
http_req_connecting............: avg=6.82µs  min=0s     med=0s     max=1.23ms  p(90)=0s     p(95)=0s
http_req_duration..............: avg=5.11ms  min=1.53ms med=4.65ms max=20.65ms p(90)=8.24ms p(95)=9.74ms
  { expected_response:true }...: avg=5.11ms  min=1.53ms med=4.65ms max=20.65ms p(90)=8.24ms p(95)=9.74ms
http_req_failed................: 0.00%  ✓ 0        ✗ 705
http_req_receiving.............: avg=78.12µs min=19µs   med=64µs   max=2.63ms  p(90)=87µs   p(95)=94.79µs
http_req_sending...............: avg=43.17µs min=10µs   med=31µs   max=1.97ms  p(90)=44µs   p(95)=55.79µs
http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s
http_req_waiting...............: avg=4.99ms  min=1.5ms  med=4.53ms max=20.52ms p(90)=8.07ms p(95)=9.63ms
http_reqs......................: 705    8.751341/s
iteration_duration.............: avg=1s      min=1s     med=1s     max=1.02s   p(90)=1s     p(95)=1.01s
iterations.....................: 705    8.751341/s
vus............................: 1      min=1      max=10
vus_max........................: 10     min=10     max=10
```

100 VUs

```text
data_received..................: 1.0 MB 13 kB/s
data_sent......................: 1.3 MB 16 kB/s
http_req_blocked...............: avg=10.35µs min=0s    med=3µs    max=1.64ms   p(90)=6µs     p(95)=7µs
http_req_connecting............: avg=5.09µs  min=0s    med=0s     max=1.58ms   p(90)=0s      p(95)=0s
http_req_duration..............: avg=14.88ms min=527µs med=3.92ms max=561.1ms  p(90)=31.99ms p(95)=54.96ms
  { expected_response:true }...: avg=14.88ms min=527µs med=3.92ms max=561.1ms  p(90)=31.99ms p(95)=54.96ms
http_req_failed................: 0.00%  ✓ 0         ✗ 6947
http_req_receiving.............: avg=43.31µs min=5µs   med=29µs   max=5.68ms   p(90)=67µs    p(95)=83µs
http_req_sending...............: avg=27.56µs min=2µs   med=15µs   max=14.11ms  p(90)=29.4µs  p(95)=37µs
http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s       p(90)=0s      p(95)=0s
http_req_waiting...............: avg=14.81ms min=502µs med=3.86ms max=561.07ms p(90)=31.75ms p(95)=54.92ms
http_reqs......................: 6947   86.391979/s
iteration_duration.............: avg=1.01s   min=1s    med=1s     max=1.56s    p(90)=1.03s   p(95)=1.05s
iterations.....................: 6947   86.391979/s
vus............................: 6      min=6       max=100
vus_max........................: 100    min=100     max=100
```

500 VUs

```text
data_received..................: 5.0 MB 62 kB/s
data_sent......................: 6.5 MB 80 kB/s
http_req_blocked...............: avg=10.88µs min=0s    med=3µs    max=5.18ms p(90)=5µs     p(95)=6µs
http_req_connecting............: avg=5.84µs  min=0s    med=0s     max=5.1ms  p(90)=0s      p(95)=0s
http_req_duration..............: avg=28.21ms min=473µs med=1.5ms  max=1.27s  p(90)=50.64ms p(95)=187.08ms
  { expected_response:true }...: avg=27.99ms min=473µs med=1.5ms  max=1.27s  p(90)=48.88ms p(95)=185.9ms
http_req_failed................: 0.18%  ✓ 65         ✗ 34201
http_req_receiving.............: avg=36.74µs min=4µs   med=22µs   max=7.39ms p(90)=51µs    p(95)=71µs
http_req_sending...............: avg=19.99µs min=2µs   med=12µs   max=18.7ms p(90)=24µs    p(95)=32µs
http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s     p(90)=0s      p(95)=0s
http_req_waiting...............: avg=28.16ms min=458µs med=1.45ms max=1.27s  p(90)=50.59ms p(95)=187.01ms
http_reqs......................: 34266  423.396835/s
iteration_duration.............: avg=1.02s   min=1s    med=1s     max=2.27s  p(90)=1.05s   p(95)=1.18s
iterations.....................: 34266  423.396835/s
vus............................: 30     min=30       max=500
vus_max........................: 500    min=500      max=500
```

1000 VUs

```text
data_received..................: 5.0 MB 58 kB/s
data_sent......................: 6.5 MB 76 kB/s
http_req_blocked...............: avg=18.58µs min=0s    med=3µs      max=22.33ms p(90)=5µs   p(95)=8µs
http_req_connecting............: avg=12.51µs min=0s    med=0s       max=22.26ms p(90)=0s    p(95)=0s
http_req_duration..............: avg=1.06s   min=562µs med=760.18ms max=1m0s    p(90)=2.33s p(95)=4.03s
  { expected_response:true }...: avg=1.05s   min=562µs med=751.04ms max=35.39s  p(90)=2.32s p(95)=4.03s
http_req_failed................: 2.24%  ✓ 771        ✗ 33535
http_req_receiving.............: avg=39.53µs min=0s    med=24µs     max=25.85ms p(90)=56µs  p(95)=76µs
http_req_sending...............: avg=19.77µs min=2µs   med=12µs     max=9.61ms  p(90)=26µs  p(95)=37µs
http_req_tls_handshaking.......: avg=0s      min=0s    med=0s       max=0s      p(90)=0s    p(95)=0s
http_req_waiting...............: avg=1.06s   min=536µs med=760.14ms max=1m0s    p(90)=2.33s p(95)=4.03s
http_reqs......................: 34306  398.575024/s
iteration_duration.............: avg=2.06s   min=1s    med=1.76s    max=1m1s    p(90)=3.33s p(95)=5.03s
iterations.....................: 34306  398.575024/s
vus............................: 1      min=1        max=1000
vus_max........................: 1000   min=1000     max=1000
```
