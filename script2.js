/* ==================================================================
       CONSTANTS
       ================================================================== */
    const SATELLITE_TILE =
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

    const DEFAULT_LOCATION = {
      lat:     26.783228,
      lng:     92.318054,
      title:   "Sudipto ka Ghar",
      address: "Unnamed Road, Unnamed Vliiage, West Bengal, India",
    };
    const BADGE_DEFAULT     = "GPS Map Camera";
    const TIMESTAMP_DEFAULT = "Tuesday, 02/06/26 23:13 PM GMT +05:30";
    const FLAG_DEFAULT      = "🇮🇳";



    /* ==================================================================
       STATE
       ================================================================== */
    const DEFAULT_BADGE_LOGO = "data:image/webp;base64,UklGRjQrAABXRUJQVlA4WAoAAAAIAAAAXwAAXwAAVlA4TOwqAAAvX8AXAE0waBvJkXz1/+f5E76CIaL/E+A6OSVCpSEkFU9Yyrr584z67qZGtdGg4ncOSU5Zd3G9cBzJtqoc3CVqAmLFWkNwO7idor4r3DjcuLatKgunIgzhh/kPhdKp3L/j8PIC2bZt09EKe7Zt8/9/IymutMpohmP0PxxIUcCxbDWWN56h+VYlpCipt7EUJCOxlTJJkiQ/OKEoSclKRkA9uxIvsT4jv+Ilg7+6I03JOgCmr9dzEJNLV9CACVfyISUJBwDtGUViF204fRYkAcABwOAuivWpiTbae3Z0CAIOgTJIsp9csL6QJLr/AEAAYgL7SJLVj8kH+AcAST/Nf5+al0btY/J6piP5fLzJznw7WOkjBaMvG4AyWKzvxfxeTAPFa8ARdmJ4005Gqx3KYnS8nX3Z8PUd/EYpXk0Dv9mxnyTb4yLaUawHpJeX5uXqkDdHaYnlkqWD2Bzvu8Nz06Nh2rbVjSTpfb9DAnOSnVTYmQXN3F01zMzMzMzMzMzMjM3M3J3FnJnVSWZZLJ1zvu+NqJRkpecPPDXZQ9LEerC28oTDi84KDUO5Z7W8Nd5ZDeeulqkyPDzZ4WXenLCH//8iqc37+/3NzLqcEU6AA0pwiLsndXd3d3f3Nv/V3S3untQ1UongWuwE7jjd3dmZ3+9rAdu2ZU+b637eT35J/oTgkKCh7u6du9TmG8zd3d3d3d1X93Ycqxs9qGY4FTRA7M9v3/c+4cCNpDiqDmyIrplZGBBP+Nxb66hTIgLYHDUlCAw4MonABuqSOJGxxKZ6IcECIxKjNg0WLRwhLHTqo9GLCtCtGw8CuLmC040OgKWNQ0zmrtWOjK6Cm2claohTA3CQhqVKK7BQaUy32n/GKy0h0RIOw2I2UdRC1ax2ExKlgSMQIivYetNYhDgADkik5dr8dEzJI+OpK5CrFFitaQQaAKCQqypDB0ekFfbomJp+dxuAzqTbMpliMecNx0v3BSnh9VHPYav39Ss1qU4NHLEXBgIAsKJMRqgPf0GmIwAqwqpgFak2vkZ3lFylwzrv9HhOoCfXKgVnVT7jEXfIqlKT5TUT1AFsJV5Vfk4GzYvHZJgupuuSRsmdzKGcUWLkXCWo2H+OHYSTUEc7wkKwqJcZ9EEkABSUvTmXP2zuICqiCkaV/EVvk9cMSgahQt/1Xx/di4pVk75CNjMlAKsNnVo4K328tXFL3Cab1uWb+rJNie6jLo8rPcgBLfN8HS4U1mTilVPJyv1h5dj2Iavf7UphJXF2LOWFoSmW8OYIFbr1e9s+1pFToMrZbrTQgAnqa/gbVwKQVqYlLoBF2cBTHjenQuSq4EOn1v8F8Qqng/9o2Pm1LTuuuHPzuk/9roABtKviEykoZxzc+blr/3DmNR9f42wu7d6SnQPAaUKCNwBg1UGdEIK27j/IkLM2SBhAQ2aeCN+Bjx+XFVNZWUGu4CMjwD+m13ABje81332POWvpAiqWXQMU2H6K62AHplTrFRQUTCR2b/f+H7tl58Vv8mKOCrRn+w+iE37ONX/9+TOvPtefzN2lBakDCvU2K5mZVrtG5wzbmC5AIxzXt874azbNhleT8CW73e2nC4CNiMwDIDzSmc7bHJMBPMT7gUPqOcdRJQ50RYVqwtkgqV/09RvPv/RtMNBGXTqBq//6o6d8/FnkZFdAhIVZu0ByvU9P6NumHDbca4NfesjsEgBYiSAGIpNyNkJG2PM3S270Wbp114gDQLt4MDvv049c/Mbn2hFHCaF2L6zlY/NE6Hnqz6668poF8Q2BRahDTpGpnRrDNwU7A5kOEYDKvERdJU2YVk8sx0O+qSbJMuWsDKUEYLzpll5h5b+3rf1KAFVdIFIQRSHyIQSccsHG2+3qQDYdOND64CN+d4GqBBVTz+E0bTKApIlS3Q6ATCwAwBrQ6RphDTXFSARAd0Ki2XqVyvti2YMaq7qyPI324QfhEJ7B24dt6EPDsAW2onWwWHXB8rFsRz3kgR/ljuZ2hdoo0dJip8viQMR4hR8VVQvo/uEfzp5iw3ZYP3zwFeR5MJFVnJ3w0ZX4LjyLO3DqROSn6Kx6zIpnnSJRCBp+pRfuiV0Af/VoxYkKkY1H/uvasccbTp2aqKD+OtNzat3e6gIkur3GuF5r4f9F0awl7ISNy8Zfzr9QJ4gGADgRoufgz6L04O8EXRt9/ITR/w4d+Ev94K8qBovQZuLwiztbL58dPv3Q8JZHvHKzDLfeD7sPOnUUANhKy/OYf18z+t/Bn69Fe2aWtQZY9P9AKmWKAKBiAATzvMxazsByKSpWdzZMK+k7bfyVvnqMRkQCCOGPoxs58hLOiTEbpzm594zLH155xc92Or5pjS6xqjkXktXjEFFDMnTL9cEpP66f97Lu6Lan/ts/3sW5ezkqEsIfAyCKE4/49C0zDw+qimMW6VQXNhxFUAW6FWHsooFGmGnTIKM7ccvMhuSmSr1X/c1yVoQMN+FTu4FjDRanmTp84tOvfv6Vnx6Jr5qnarkjion+7JQS1iBgRJroi8qUvmBaXPfVhU/53HMndp/1bwlO/KYQDALA9Brf+5r79FzKTrNMEwhSHtbxyRPy6vp/FQ3PSQeF0ABM4E+A2jTK+/JX/MMbk72XCjmAqEx9kiUeLcGuu+uc3T9alNjiVoOkKCGcWsB8ZWfFvCEWBKtO/HQO3jBw9U1n6ZD83iSLS9T/qiAATLc4+7yHXfE1t99qpnaGuKrkMcLUlCxHt9JFhfBfa7oTra4uAEA4o7t97d/nXPQWTRVAVEYhqU2vPLd4z50rE0taXPJE0XrKYQ34XR//XY3/1war2YYt5qJfApKlJFkMXCAx2ttzw0jxxOq/HZK9OjEGHQAW7b0Pfvd5Oy5y+oTGKhqrFcYzandUpEo3usoLs6lHKKCbAYgn3jvzUl8/OqRKCIj+2vcgRdTt/pnbZS81pYoXw2m08/jfuplxsPg8sNBYUJDAkhj+79+zVFYvmX9n/vzAr/z8q8GpDkC4Q/sJuis7NaQcUAhGNXsyj7r1JHcA/ri/xJq3JPv/KdQBWOgRUATlej5VjrGcbKfmfKETM3C89rBstwudErAdf8wRf9tyvYHRLb/1ikgDAGa26C5+3EM/dQeNRDEh6WwqZ7U2axJEDlHVuRyRVOtW7rjn7HGa/sPlMnwPzmklsboQ09oaTPBix4/Pkn18bO9Mfay66HkPLp2elvaO+dONGM13OHmp0xzfbnZPCSEAsLqTl3PX6L7VqsDvN35UnNXGDjqjnz0nZBwqqL7lhn9CDzinmUivEAaAKIOeRC+Jf/u7X2FaMoEGjCn0kBhQk5k8Pbvc+eCBic0Jl/zvrrd555b9B/v+OZonTWp9q3jTm68rYhdZOiDWJgAx5fP0p/5+wF2ifwYO1KwaJKxMLdgKm7p1IZkGXm6x3lt8GkC0sgtP4Fc/cNYN3w6aaMQImNhkHLUpWPJg1/xsPQAAn23552dD51nhGO3xiOyzs9B+5olS4EgaShKQNODUbln/+lb6/n4uCqTC7GKjLmiWTc/eOrTu1yECViahjHOafseTF/SfIx+gRLMn5idFw+PcvQEAwMDQ7MhdK61NuZZ9kTVQXrH2+wMjzVBkkYQk/zskoEzY9LQ7r3nDM6zBUNf6ZbkeyCSUvet+6TM0D9y5l24cf9ovnx5fZm6SE2KRKxKYDWM0nhHvRIU+MNQe7et9xHXe0HarqG98v6c0k6WMSdr4mwhYmFz5I9WEMVYA4A4xcKSSDj2v6oV4gBECQwEPcM70mNc23EH6KkOEJ4mC154tySABP5H22aWF7ZW8R6g/zddcZcATD7hxbuLe9eu/PbLpoBZ5VANJAxLAJwy8bDJz7VwuC0A3miUOjOqBu4qfvmfgjO+U6AlxhSgnmP2r1/75DKeAE2dOnLsabLFaZwsZsaxYGUTwSHrJLo1W7+GuM3EA+JdJzrg438w4fkhpokP5/zbe/ZV4salBi5cEhRHhZGzrDupwuq5mPdAivPrWLF0AUZHSgctumu+eaolSf7MfFmusYXISni+G5Xk0Fyfi8DI+f4g76AGA9wm1x+f1pDoEH/CCUpNCOf3mb2xbvy2Q0pKpAuNAJCsu5cW4NjeQwf3OzVsXgSgkOR50teubmVX2WFJDAqqj3EqL7QNXhEqNxi2i75tt+iwYlfRjs4EioV8KQMTcgB1ltktLfnb0qur5z3wriTwJPysIMKUtajWcpaRUcKQNDmZv9kUABgswC8b2HO3iv2Jp6KyhklUfXQeuGqqV857Il7Kv9RS0yfUsEQEAwWOF6qqfd+WInf/4R+Kl5p0kADDI2lCY/9Q4YU5eRF5q5US7DUQ/fyJ1aNBu4saVtvaFMa9CmY8ajhpqkHSlXdi9s7J9c6RfLcOM0QFEFPou4W5UtUaYOli5c7HCVLXsIHuiOala1Jx0X3DRYTon0uMVq4HlEkKhL6PqVJQz1bQ5urUEraJxN62/S7TshnbogM3CvDtvu8yqKnUg3InFw1Bzyvz4XBbNyeWIyu1FAD8PBYXJlAtSGmBCOV+VIstIic2ybCrBYjHYl+p/30GO+YrqXw9mAHfgGEfkprWCRQCLVGkt1XNjXXlJ4rLdBqCwE2Hb2NGCWESVQrHZfNcQ+QD4lEoBhIh5VpUXubN7mIiioi4vlFEHrIi3RQAdm6DATpCgJlhUr31krLSGlNfw5368bXij1roRZ8A8mmI4RbWixQhY/NtrSjQnjT+nVs7PvQQAji/39JemizGH0tCspO3hi7Uxot+CK5oIxbfm++5dKAAoTWBClJy+hlZa7UUA0qrcsoa50C0y31fhgqBoYKCjF6V90bQ0aVcFygMXOrWjEYc2bFGPCIAI/6ipQxG2WLeCysuQuT5yjjpQUAc/QYcG2wBg0PLG5TPBJN8/b7u0ul83R4TQqEUII6Ia4bZdBUHeCY8zPFq0FitMpWNzOOZFczLuKIK29em1swAQotbw6BNpFGQdsUhigVA9U61MQQlWqkdOFq8ukS92bL7cbeVb2rzqQOtPKyrePaRcjObkMRansaqpraTyGAAfGBuoTd/juZo+LD/reEltTePV/yWhIuQsKlELgIAxt00dVGHERKwZZB3jfWCFbxp+fMXHD1eUQXsb7vLYnYtxHXW4gt52oaz4TwQsnsJLva5TGNP6NfXB+hJbVBZqvESBjbolpCEAjfWrDQg1bI3KGhwDxXS6NK1X/kTXQiGm8TbQ4f0fiH3o7Upgsahz5I91IipCDx1pXrQOAArQusel28fGKKUtHUoosVrTyM860IsGJewQtkCNTAuARJGYFzpT4/t0v6ftQgHHYXjbSaoc19ZImIu89F+54HzjcPCcxwEgSyS0vmf89T7P06+x3OKEEjnC/1qr6TRgUK3IRKGYa4pyrYmgrYvf4NuW72AsTRQwcBPqriPjvp9Vp+filgj/lOcq4fRas/yXADon1sNrvG37JTu437myxBADLZpHvVr0jOj/5toTux/ljT62q50GwRcXAR5/uX2431vGcqszO2t1NNDiOnzD+eFLXg8AE7hgw0t2ffD34rd/OS2LLEGJXA0r9dJxkAUK+WKlk3qDT8dz1myZn6BEuw2oP12QvPs4pZByGyuzU8++TWuVi1K/Gi4/s8qlTQAWR2E7es233JHsMyshAMZt+JftOstvOKb5o+xI7eLNP35fexzXePsmJJP9m6MTw+HWlXqsm93RtbW14zAxwVf/pjdfwUAA/O4FWC9x7OiqZzwaVOSWJm1YLrCY4K1ZWVm9HVCasPpu9L3bHzp7/UN57HLiDxIAC9Z9f+752bMs9Tt+by7m5SiKRI1wk2Au/6m//QKq3lcx1O4NDp4aG/x5rAC2y9w4LyMlPj9L4nOjzImyZkTm+KsThxsXPeX2AD0XVgCAOsudbz/LrhSWsBbVw+l6iOaPS4HwnZf773txBKCdwO6Bnwo6CcgI855YhNLgQxb9ymkSr7y92VlxUK/IcilWAt/FrwTtcOpPL8X+2zIAWL/4Ze8fjrPFFLa8NkfV0nFIjPxnMHP1b2jTtwFAwyBm4ct9jbaHB6kFebucteeb8xpKQhkLBCMAULgDrigmslFz3s/aP6YzYbC/vbx8BTZJtAAAaM9bvGtO6Vne8iQsK4R6IGX2PNXtRiIW/azUYnZ8unjNa6i0GQAWF1ei4eH9r/yC7vijpr3nWhO9yBOaINTsCOD02nwT8z6ea01qX07vt5e6qNg2eiBaWawslFW8V9zUV5atetEdt8035yBvLy0tRa2IzUkoLDYzS54Mrn5+5YRThBAtr+vd/dpv3LcXUofCQHPMoYwLnvhPL4sIABON6K/9/YLwp+mxcO2MveG7x4eHt0UarVbZbX3u0v79yz3Fxk6s1bVGRLeeqht1u1Epa+Wmm9kLHzXvfk0EAMjj02CBDRc9+dYvu3HPZz2y9VD72OHm/cnCfsu1lXBqmUSLWtC4tlDsZuNTVS+b/Lxf7XupZ93twokZyOKo9J1//Mvee4/vGajbapZwR6uLubpFmUdLke+7xayZG5vNvuA+es3bI6DdhsH/TwZbTsQY1XWttz536t2PHvvsQxY+lOz0+hbbti+hXZ4rL85Uh1+mfNXLj9xw396bdzYu7S/PKshh/2e+YjyjLdd/p/cXZ/SM1BNJ/Qct0WlGIqoLZaA+tSV4U4jLxqIJtmDU/hAABAvIh9l1Hhs3EqMI+dRSU8szJ/v8bkImNyl6ms2hvseSpV7Uxjirr+HMg4w6dBkHYDT8t5+VXBqWlxdO/QgDUGej3kOUkyeNYmKXiXp1JAwhJHWws2EYhiBGjCptKmEpGIXdUKb6G4pYlczNREVi/sW/EIGEWyPUiQqqfx94iXAyv4UTlz39ZuqpauC2akcXNSzGsT6Ig4MQ4gXIQJGowILl40AFZuYU2ZNRUU0ASyws1Uv9K40oImGJxNe4gNpeDT77d/vpP6oZzHa7smeghoLfv5MfRSVEx49Hx6MI3wda6rYYs8Rz457vd/7ERnvtpahf4b4Xm6+fljgkS9VusQFCOAK16rfnJp1WJsuwA4Uu+Tb5A7F0brTe+Ii94d+RYHVwXAjhrov0z4/z/hySq5Qsu238/spy1GrVbz6iujAprOIYRBU6/fvlnFJGIVOx5YVjsdQLv/aQfe4GZ+lts+4rhpNnBA+dLr+a7x0jMWKJsscTxeO40qq0cE4r02LkBSqOMfMgqqjWYXGaqixYgTDg55RzlXJKmZdSirMqj5d+fYZf9KTa8KQ18oTV9zDXtt9xE2LI3HI9fbQ+OmK2L5WbljonLLaUWJNYkVhELMaLcB2WSeXiNGFTa44r3fZYI5y9tbDQ2Fhl8nDkOAFA3uNP3p47vEr+W0rsOiZUD7yXvW4re/6Rn+EveLDo4ULUc1FnLr1G9cDismA8kyjJrAZ2OXFqiVtO3Tj3XO5FlRe4Lv9Bx3IrS7kbiqd7/9Yxc/uxogEg79rrR0SkIpEwJ5AhnvM3iQqeVgs6Ut0wvg8SrQLkoRFf96KLMtV5U3t+So8cEb+9j5yZyEMl9AQZQU7gPQz+V7Shg4xJAmTiYOzkDDdpctBdMavG59qFYMepUzJbM1syC0Ta2bP2pM98cNPqH5zJHZmf3RAeaFAExBMfrZ0VM4F60PPbGA8p9cCm2XFqQXfwF1BOpLpNxQKJKIUWXbVLmen5z8w3PP/lSDH/ICtk16eTD44mbqzwtIWNECYWBumMoybBgDGTIDXQtEf3mf2L7eEpK3HZOaKy3JbE7uR2KyHxzAu2jl90R3bTu3Y6zgIF0zf8R/9j2Or1Biho6OJ5Vl93MFVQLlOTtdQcS3PSaOCFJIAyo7Z4pqTZnnuGO08aV5VpnVaz2xeln6mtT3++YFGaufsYPRk/9LreR47q/UsS75/gkamwXS/+cUQSl9wE/WPyxpGzBeWD6gY1k5i+duYlY5Pnrx879dP9cCEMQxupf32d/z7as3y2eNMo9RlX4RJiLrmsiJ6lUbXCzIJYqf8W8ehMt6siLUCcwIHuvIQg7UBtaEaUI4t4T/bYpjEuzEp7UCzo6SFdIVuYzG7pbF37EU0SKTzHwD5Gx1mKnm6tf9urem5b5d2GDOZUMUmMBMrFi4GmQrB8euYVG6fOvS41+s0ARmAHDIEGgSi7591TG3859IKlairpeftY8U9r9K6MksA9UtWeSgp2Je5oVG7bRLNX4tW3StvXYJQ902WQ0pWcLshLdzLSnj14QBXb/r5ha2RaOiG+5RaRzK7vZqsRTiLXS9D07eeN/5L4gXUb+78pGGARS9QOhpHRsCQk/QdudvzA9gsG/j6UfNAot/K68Zknb5g649/Znl9F0WY4C5KgQQAozrx07Hnf3PqKVnxot3QaVu+TVn1veGLUdBuFPx4fTjdIiFQl2knPlqLb6Da6OKrx2ZAgSYkPqFTq5uttb6J+8BD/fGN/Vas1jRqbc6Ejog5ZdK1luynjxVgx2pdK/6skD4UPb7/PybPi/f08rKl2uumlv6cAAfCPbN/LaSOVDYkLJknDJPfLtf4DwRs7dvSiq6021jyOYCkDMAhl0DkcAZAy/ZuL+lbnibX3km9IXpD0CSm7NruWWWwUHzmHR2ODcvTxoDKcSkHOydRVfV5M/PX7Bu5dqx4FGjV6MXmSyxjcEIuUB/+Tl6aS8hQGbVqeTRZrv+w5PKIRsyJivufE0UoKUmYm7yWX/EX/kiMO5L9VUs1F3LP+0W377R6vX/nst40SIUsjxoZYs6dn8NYFs8DWl2n6QTY/2Wce9anteWJtcuC2RAZr+XH6e9j5+mT7pZXrfzk7cXO0evBnCOC8j6Y3fL0n8Oe5fPjeH5m95mrFh+p6srn9HQsP3dcs7OnYlGXNdrxjJOn3PTcddWcTcZUtGx9OVqYFuYsxJFHOx/9+zGX3zvu0z1ZZTLykI45QBUzOnx9GBQPE6FmS+6EojReWU2hZaT4r7WsFvjJ0TqsX+agk9JXlqJ5b3jjcGemn6qUDJLBCGn5d4ya4Mcf93vHrkdGxJ/985IJnTman84GhifEjk+sG7WlXT6iiPfjT6bX/qtz7qbMq0fjh3I49N5OUfToyGp95jT/4FaSnbGgpxUWN7fWegSBo86iue5zBJZTSSn5y8C6nTaRn8md8fb/lOw/+yrvSk5ao++ThMDRCvBbHD/V7xV6xlT7hj4s+8qW/v6DU0BFjdYZnZXk9ZGocFqa8D56q9euZGSv7Rt3M5Df+s8tOJAAcdPiHlUAtZxbMQ2K0NPGWbBmy9HbfIAerMTLasq0eunaYikQUMraia4IbYthago2j28aPHtXfO+P7XEkpouwcW5bvueKRfPct0/d5fxKvEytHQzi0Ox0YjPFiFDWO9F2f0Wt+wW94NAk62rSaZM0TdfldsyOCXErD5NH6yLJy2a7a3ofKvbeMX/z5t3HwqbFky5oyPWmxhlmxcyDw4atuWPLQ7gMPao34+DNbxUXV3Ar2JX0PYWpqMNUamHlCB/5BzzpXA92k77/xLhHeBVbBJkaBksb8XCwyUcJJ7H/qZew6HXgiN2hmp7OK48rMLpOgxDBkiS73/pg1kdAzoTQeYsEXf+O7bNV4u/nqr9laaFV3fT9x+i08Zea8i3Zdc7/MfBy+NB1/yGmw7vl2emi4d+GAGe9wYoL9n/xClix395fXbC7vVdMzpebcXpvOPDY7tGFJMNWzy+GyztwtRx++62tWXvfjXd7QoCDpenl2auj8kcLOKTJio0X5WFJo2kt/e+vIkb2i5nbnf8o1F1k+2XXOiYm+kquz2fmqH9TXMzuIuyXr36rCMRUnuA1QXi3tmC6okEsJZCJxdq5D8OeGg9bcJgywuXj7c5MbeUkQRGEI210JRZjN9Y+um9j5bGLf54Rt+7SXC+Fzq0bMJYzYT8whDtGKQZrr0kKPismbyv6vZeHnnygf4fmu0mLyvkpZfB32fVtx+DOOtC4N4SvmGu8hs59FHwHcbstLm1/YXPx4uLI165fDs4qLgVdPD42HOENHYWIiBwuFmgrVQOYaY1BK/0zhTpHcdNmrzu4e/dd3SrtHqFCsq5frcigSCQAUSpVJiTMiRCZVaq0/84uF/z+3fHRR4cjqnZfVyYiyqCxyp1DBczN9vX3jVoljTtXFx65Ycujn6+0CYadBsFG4W6hciO0WhlAZ34h2K3dBl5eKbRKnkCJMCm+d6Alek0ZZGFGzlYwxqHrtwanPPTI4jW10vs00EQwxOCj2xuZfozaGLoKUmC9sw/dLspH4OaqnhvE4gwBwVdUx6AZ6XZE40ba7MlIlaYd+3tD57ymceEXh6OnFA8uthC2Vsi9Ii4AbG+7jKxKC27/XkOu5fsljfNNkfOh+f36xJi8VK16n1Y9vBDPPnycaM5ITzsjdiBwP5WNGGikkulNzBie1E54ZwmV58PARxRc7QHfQFWN5/R7ON4s/sVDeHX8anCWkCDkIRWcSrpLygYS1GyQclOKBZPvxIQl7s3hersvp7ZB0g9gVQgi9ml4MP94H16hdRvkGku6Dr0jH++MGgKtqfGX8wHDP2PbBd+wqLH7jmQfPe7jk4GKIuc7me71Xk06R75/Y9pXi/4f7msWZQQoZoeyckPjgLtlrVab92YXekg2JQje1bU1x5pjgJOdf0ccWISD4PE6GKtvjiLm1cmCjchMHyKMlvMBgyMOg4xuqC4jWXWb2T3Bwpmfh+7U7FLKUK7LOvql34cZ817274c0dn25lTnpXn1z0Ic3mx6VDlMd3rE4/0U1s8ANvEoVDWeL4MgFlUVH0own0vu2pu2nvAZp/bjKwo/PEW+vAZ6Xjh+qjI/Pb+pM6gDIz50SrvjvsPXi4MKsfctY8/BUPjF3dp748/cBdXU3U4oEvHV0QsIvD0plDbyqOrQ6n+89plkNeOpIq9mIDWwsHjxzceMX0tqfe89T+re0l1x9sjk7c4fWut91EvFsSwIToLMEuoHs64VRV5YSUYaOIdWvlmktXj339ghdoMbymhBJswhR+tTJkehX49qhk8RHkm7mOCdXD8uQVI4/hM+IXOksRDORRjxBiL1VLHzkXg5w0aa/GnPj94WlqNnqU2jWUX1wYul5sWCSiGfy5mn7q4qEN5fQmSjJxj4WTvpxtiT5nC9t2rntEvpU8bC64WNShtaH+tHOjtSl79Kr2h2yXErHcPnfq8AWDiwulXk2esitW2lTyx+UWl0tfrb9TYrC4R5Xvyy88s9g5WjQqc+3EyK0tKU8+lMji9MTDiSVHhlm33DeflVhqrPrONWjQCO901UfHJqc/74ebH3EnBw6GLcv1as+b81U/tQOTB3urtVhS7Unqz5rY1JPMHpqZOat//lDf4sn5iXOWLc3Ot7wkzbS6hblD44vJK2094sD4dMHszNaS0ebjz4ivfunZC5yQbp9f8WUrv3HvUt8knIWmRAP4AWMqdJQkBACuPrT0Q9/PwCkVneGG4uGnzjlzfIxwQVpNE+OuQhBnXig9W5YQbhcfWbdsg0p2qkYs6AIVm9+qqkQ9I4+HUR357IQb7D/FxcNDhizvgVpqtGu1cuvIJkLF45s8zcrz+43GATJfpAOOS7VIm36CIl77X+yu9b4tw5YFhsz03fPhfGp33L7friwzP2+S7BHU34pDX7H5/5uS1liov93iDIs2L3KgiIU25uGj6/ZhB9OvtOJlIyuVE5rtv+AfyZdf86DJmwI+9NuQT09JGlrnX4hEW2sWdriENM/lKHt8srfTSUlaqk6dcWLgsmf85Nq1Bz7gmr8YMKY2BDf0jDi0VDh+XCyjQlrs1NhpQ+/6/btPH9s59ArRy+HEO4Ju3/RdS1/sNZ+aWOUMg4eyQh89A0eSyAiZEqVE/ZJ1bDFbE6UWKj+hARtC9ioTg1+ib/RFecL7D39/RLOEzhlJ4rkhxoLeqv9HnzT5vvUdDoyUmaLGE85bMDdod1nntCmr3iX/zucvfLioWu95yEe33e/WBf1HK5943/12ptnWWr4UD5JjSnQ2aXXcyPccMOUJkVx570gwAyIGwo02T4MsAn3l/yiaLFFFY97Kqld4iNRgucmAqnW6JNk5dDgnMWUSaRRLfUSMd9qDLcYGUCJSWASTJaHq6FHKeXL/hmsa0+dhz5HkxbI6HV752Om8RHzcVNCmjAtpsfUWN3h2FUJ8tLVzV0hhA6BgdE25Yc/Qw/v9TefHv5aF9897vcfrTlpd33rk4W/zm8ugqRAi89XKyQr/FUR7E2kg9EjxfAJ2PHj2rq2eTeb7Lv3NX+tAS+OJ4Su9xf8ZW0naJtPJIB52wraiOzwfTnHj6Zj84oI9v0LML//2az/mnTn8fP30GBttqoT70/ez9vx0+eTMg+X0CH9b3hQxBhIe/W2sLYTg0f9hcvXdBv7OqENpTnH78z7wVUNOZgRAJNivhV2mNM68bNuGbutfpQq15A1HrE/b+e0fTq6+I9ZYb8JQ89jU8dcnyjvC7oK+5h9UdBuxyNhhZIlo+GUy8JeAJkBENIkAsvKzGxi17ZO7Q7HQZpOSIqeNPb9fllh97JYn3ZRpnc+R+otXibSn9cW9cstA8ssEl5JWDgzsQR8MPuPo6ccmtR17rfxCJBKln545+eiFsaUHH/vLZnkPMt0SEQB7I6qio4R2cCY6p7wVY8NXPufnhcAiiAGwMK+950+y+8ndxLkbo+x/Tzr7tr7e/pL80kP3fXn9hb/3eq4hy4ge6zhzqJSu3ffIx+y+Ga+xd+PKTyu3RxgCyBwVEgnALU0ARhXgTrRonYKDrqukG0b9e3c+Kz3VCDvsn3hlOj49Gf2X4/1aB5iylJzx1JNbywU8ilepb38c2yh+PetxYtVS5+nTB56latXM3iM4MV61rGrzh0FEAJk47m647KQgs3+CCvkZ2RahNxMoH1fqOSVFDNxY8QbcUtlRJ5kM5fe+p2/VP7QtCf1iP1/kdxbkj67+fTIkmHKd9Ztu7O35vjAXAOHzf5ssAoDxM2IF0DSh6SVLLyoPg4jj9syhSw+bHhsx9TmB1lQ93zB08wA/Z7dfzE3ExMg95eO/cIdGHnvxnbCJLycrUtG+TDRuyBTtizZMTEwfvusbtzrrRkjUQKVExLCA8sRw0DqckwmyDADRJW2RVebZcjF0kAnoVA2riFK9iAWxyLo7d+xDIHqHHn81l0pSkThAgXDMz3nOB+x4q0jKMknSJHOWngnLD7uvs4ktZ76zT22hgR7VBgCeXfwDy/2hNLjRZzo9CcQGcOVHOgyslU1ZvE9xcNYpbXt6/cvuf+CtlmWo0Hd8oDV2Z8kVUEOkpVgmuY/U7k/4G1U4KFpnmybZ6bu1Oc5LyAYJFU/vIMsBACIRANNUcpcfr92vHwjSnHESoQFBkiuxamLbZWcGnZdlDl9SOr64sH/QSnxrbaMle8kyCF2H1S87/k5USPAnrH5r1lZn+EWhnbPEQssYmbQ4d+gaMs+L5fEhNQsXAceMto3tPnPxI5vmjnDzhUI/Cav5k/5tV7RUL6TU2HlvANA5VkxvddplIs/iUpqGncCRpEusr31W9RzNMwmJqvIvZnki718zMbeiPFtRJciJDBI1IE6AmdWW598QtuuHbjnL6hU7xFCu3NH4gtZTRVIyN2HsAXMX9HSPEXXChSRd9YP1my/ji5P7WvbAIoqCVUi8JBZbCWswPq7viaMoISSAcVE1ADS1HtQcvOrg3ziUTSjwNooVoB21gcNmQ9SAYxIgD8Vq3daA8ertGR+J3icyj0wAAGYiZesO7arbPTVSJ1GDhEoroE8ycMGewpE54WzltmNMoaKwvfyoY4+I1EqczOEOJespuDhx7leOf9kL2ZZVvu/kalVI2r3F5lBxz2g6qnM3IVHSHbBoCSJCAwDA7J7is5OtMzgWmgAINXG4oFq/XhXCcJEtg/f0hx+KDIoKDYBph7L0uiMvVoVgzJRSuUjsAJAMdnSB40HqG/tjgske/7Op6GOFrijKEjRj4fGMG021aqSJaXc2NXeJ5GWGenQ8bYuKbRaOLbAhQqXxZE5SknV2y9/DLD0uzirOcBONWlcqi6iOMXFn+QSxs0TDLQBIumTdLC/fd3RJ/yCDnfXjheeV80bF0YnEQIUk0F/hlumjfuayicHun3cX3peZ8650egOnZPk0Maa/rGKZnMFK2Z9t3NM5RTRtrkJDVVCazOY9hTtL7TpHEmhYUcd0MxW1dNp3zHQDealSKR7BKIMcXZUAQJxqfcZ4ttVv7M1+JMwH8Psizct3vF31N7x6srP0xmzl87t5hVWiSajC4k5UcbuIO8426YzD5HXji6yycSEhFyCBvkrMpoEsQBSIj5JFVcy6AAygwnBminkw1OeNlr+Wb9VEsnj5oG0z6WyNXqgkV2/lRKxxcPUtbvn/o/95ndd/yGNPUm507efC4iuPj6myADSqL2LBLBR3q59gOJmwk2w9xcN7+FV+IbktVtaGeNu++PkUGVvZFQlA1V0NAKc3VHygs/H69EQqBNOlCytikxubkGNDCUsATgIAKvf9mclC/pb9bm3QDgO17SE1i3bODxvSvsITg6M39PR9UoyG2DKxhuSllTwqskiYz/LIXjbl5xdzRFWz6gZjFi82z+4+VeSwnwh19EYuKi6g4oC2yaKKIaFG1+6gUmGr2N4gZxZgw2HcyACH5r74xD8bSDdOl089RnhVAUVYSUYiAAAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABQaWNhc2EAAA==";

    const state = {
      hasImage:       false,
      badgeText:      BADGE_DEFAULT,
      timestamp:      TIMESTAMP_DEFAULT,
      location:       { ...DEFAULT_LOCATION },
      mapLoading:     false,
      geocodeLoading: false,
      searchResults:  [],
      mapZoom:        16,
      cardWidthMult:  1.0,
      cardHeightMult: 1.0,
      titleFontMult:  1.0,
      subFontMult:    1.0,
      flagEmoji:      FLAG_DEFAULT,
      cardRadius:     18,
      rowGapMult:     1.0,
      infoMarginMult: 1.0,
      googleFont:     "'DM Sans', sans-serif",
      infoFontFamily:   "'DM Sans', sans-serif",
      infoFontWeight:   300,
      googleFontWeight: 500,
      pinSizeMult:    1.0,
    };

    /* ==================================================================
       DOM REFERENCES
       ================================================================== */
    const emptyState      = document.getElementById("empty-state");
    const previewWrapper  = document.getElementById("preview-wrapper");
    const previewPhoto    = document.getElementById("preview-photo");
    const btnExport       = document.getElementById("btn-export");
    const pickerStatus    = document.getElementById("picker-status");
    const searchOverlay   = document.getElementById("map-search-overlay");
    const searchInput     = document.getElementById("search-input");
    const searchResults   = document.getElementById("search-results");
    const btnSearch       = document.getElementById("btn-search");

    // Overlay elements
    const ovTitle         = document.getElementById("ov-title");
    const ovTitleText     = document.getElementById("ov-title-text");
    const ovFlagText      = document.getElementById("ov-flag-text");
    const ovAddress       = document.getElementById("ov-address");
    const ovAddress2      = document.getElementById("ov-address2");
    const ovLat           = document.getElementById("ov-lat");
    const ovLng           = document.getElementById("ov-lng");
    const ovCoordsWrap    = document.getElementById("ov-coords-wrap");
    const ovTimestamp     = document.getElementById("ov-timestamp");
    const ovBadge         = document.getElementById("ov-badge");
    const minimapImg      = document.getElementById("minimap-img");
    const geotag_minimap  = document.getElementById("geotag-minimap");
    const badgeLogoEl     = document.getElementById("badge-logo");
    const badgeLogoImg    = document.getElementById("badge-logo-img");

    // Inputs
    const inpTitle     = document.getElementById("inp-title");
    const inpFlag      = document.getElementById("inp-flag");
    const inpAddress   = document.getElementById("inp-address");
    const inpAddress2  = document.getElementById("inp-address2");
    const inpLat       = document.getElementById("inp-lat");
    const inpLng       = document.getElementById("inp-lng");
    const inpTimestamp = document.getElementById("inp-timestamp");
    const inpBadge     = document.getElementById("inp-badge");

    /* ==================================================================
       INITIAL FIELD VALUES
       ================================================================== */
    // Default badge logo
    state.badgeLogoDataUrl = DEFAULT_BADGE_LOGO;
    previewWrapper.style.setProperty("--google-font-family", state.googleFont);
    previewWrapper.style.setProperty("--info-font-family",   state.infoFontFamily);
    previewWrapper.style.setProperty("--info-font-weight",   state.infoFontWeight);
    previewWrapper.style.setProperty("--google-font-weight", state.googleFontWeight);
    badgeLogoImg.src = DEFAULT_BADGE_LOGO;
    badgeLogoImg.addEventListener("load", () => { badgeLogoEl.classList.add("has-logo"); }, { once: true });

    inpFlag.value      = FLAG_DEFAULT;
    inpLat.value       = DEFAULT_LOCATION.lat;
    inpLng.value       = DEFAULT_LOCATION.lng;
    inpTimestamp.value = TIMESTAMP_DEFAULT;
    inpBadge.value     = BADGE_DEFAULT;

    /* ==================================================================
       LEAFLET MAP SETUP
       ================================================================== */
    const markerIcon = L.divIcon({
      className: "",
      html:      '<div class="picker-marker-dot"></div>',
      iconSize:  [24, 24],
      iconAnchor:[12, 12],
    });

    const map = L.map("leaflet-map", { zoomControl: true }).setView(
      [DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 15
    );
    L.tileLayer(SATELLITE_TILE, { attribution: "Esri" }).addTo(map);
    const marker = L.marker([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], { icon: markerIcon }).addTo(map);

    function flyMapTo(lat, lng) {
      map.flyTo([lat, lng], map.getZoom(), { duration: 0.8 });
      marker.setLatLng([lat, lng]);
    }

    /* ==================================================================
       MINI-MAP BUILDER  (same tile-stitching logic, outputs a blob URL)
       ================================================================== */
    function lonToTileX(lon, zoom) {
      return Math.floor(((lon + 180) / 360) * 2 ** zoom);
    }
    function latToTileY(lat, zoom) {
      const rad = (lat * Math.PI) / 180;
      return Math.floor(
        ((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * 2 ** zoom
      );
    }
    function loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload  = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    }

    async function buildSatelliteMiniMap(lat, lng, zoom = 16, pinSizeMult = 1.0) {
      const tileSize = 256;
      const cx = lonToTileX(lng, zoom);
      const cy = latToTileY(lat, zoom);

      const offscreen     = document.createElement("canvas");
      offscreen.width     = tileSize * 3;
      offscreen.height    = tileSize * 3;
      const offCtx        = offscreen.getContext("2d");

      const tasks = [];
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const url = SATELLITE_TILE
            .replace("{z}", zoom)
            .replace("{y}", cy + dy)
            .replace("{x}", cx + dx);
          const destX = (dx + 1) * tileSize;
          const destY = (dy + 1) * tileSize;
          tasks.push(
            loadImage(url).then(img => offCtx.drawImage(img, destX, destY, tileSize, tileSize))
          );
        }
      }
      await Promise.all(tasks);

      // Draw pin
        // const mx = offscreen.width  / 2;
        // const my = offscreen.height / 2;
        // const r  = 80;   // ← pin head radius, increase to make bigger

        // // Pin head (teardrop shape)
        // offCtx.fillStyle = "#ff4d4f";
        // offCtx.beginPath();
        // offCtx.arc(mx, my - r * 0.3, r, Math.PI * 0.8, Math.PI * 0.2, false);
        // offCtx.lineTo(mx, my + r * 2.);  // ← tip of pin, increase 2.2 to make longer
        // offCtx.closePath();
        // offCtx.fill();

        // // Inner white circle
        // offCtx.fillStyle = "#210d0d";
        // offCtx.beginPath();
        // offCtx.arc(mx, my - r * 0.3, r * 0.42, 0, Math.PI * 2);
        // offCtx.fill();

        const mx = offscreen.width  / 2;
        const my = offscreen.height / 2;
        const r  = 44 * pinSizeMult; // Base scale radius, adjustable via Pin Size slider

        offCtx.fillStyle = "#ff4d4f"; // Pin body
        offCtx.beginPath();

        // 1. Start at the top center of the pin head
        offCtx.moveTo(mx, my - r);

        // 2. Draw the top-right round bulge of the head
        offCtx.arc(mx, my - r * 0.2, r * 0.8, -Math.PI / 2, Math.PI * 0.12, false);

        // 3. The Right Smooth Neck & Point
        // SPREAD CONTROL POINTS OUTWARD FOR A SMOOTHER SWEEP
        offCtx.bezierCurveTo(
        mx + r * 0.65, my + r * 0.1,  // Control Point 1: Pushes out slightly further down for a softer pinch
        mx + r * 0.35, my + r * 0.7,  // Control Point 2: Eases the transition smoothly into the tip
        mx, my + r * 1.45             // The sharp bottom tip point (lengthened for elegance)
        );

        // 4. The Left Smooth Neck & Bulb (Perfect Mirror)
        offCtx.bezierCurveTo(
        mx - r * 0.35, my + r * 0.7,  // Control Point 1
        mx - r * 0.65, my + r * 0.1,  // Control Point 2
        mx - r * 0.79, my - r * 0.1   // Back to the left edge of the round head
        );

        // 5. Connect back smoothly into the left arc path
        offCtx.arc(mx, my - r * 0.2, r * 0.8, Math.PI * 0.88, -Math.PI / 2, false);

        offCtx.closePath();
        offCtx.fill();

        // 6. Inner White Shadow Circle (3D rim effect)
        offCtx.fillStyle = "rgba(0, 0, 0, 0.06)";
        offCtx.beginPath();
        offCtx.arc(mx, my - r * 0.2, r * 0.45, 0, Math.PI * 2);
        offCtx.fill();

        // 7. Inner White Solid Center Circle
        offCtx.fillStyle = "#321313";
        offCtx.beginPath();
        offCtx.arc(mx, my - r * 0.2, r * 0.41, 0, Math.PI * 2);
        offCtx.fill();



      // Return as a data URL for use in <img src>
      return offscreen.toDataURL("image/jpeg", 0.85);
    }

    /* ==================================================================
       CARD VARS — compute all geotag card dimensions from the wrapper's
       rendered width, then inject as CSS custom properties.
       Call whenever the wrapper size might change (image load, resize).
       The export clone calls this too with the photo's natural width,
       guaranteeing pixel-identical output.
       ================================================================== */
    function applyCardVars(el, refWidth, refHeight) {
      const W = refWidth;
      const H = refHeight;
      const isPortrait = H > W;

      const ref = isPortrait ? W : H;

      // Width multiplier scales the card width (and everything derived from it)
      const wm = state.cardWidthMult;
      // Height multiplier scales fonts/padding (since card height is font-driven)
      const hm = state.cardHeightMult;

      const cardW = W * 0.80 * wm;

      // Font sizes scaled by height multiplier to maintain 2:1 title/sub ratio
      // titleFontMult / subFontMult let the user resize title vs. the rest of
      // the text (address/coords/timestamp) independently. Since cardH below
      // is derived directly from these font sizes, the card always grows to
      // fit — nothing gets clipped or overlapped.
      const fontTitle  = ref * (isPortrait ? 0.055 : 0.030) * hm * state.titleFontMult;
      const fontSub    = ref * (isPortrait ? 0.042 : 0.023) * hm * state.subFontMult;
      const fontGoogle = ref * (isPortrait ? 0.052 : 0.028) * hm * state.subFontMult;
      const fontBadge  = ref * (isPortrait ? 0.030 : 0.016) * hm;

      // Card height — all derived from fonts, so hm is already baked in
      const titleRowH = fontTitle * 1.2;
      const subRowH   = fontSub   * 1.3;
      const padTop    = ref * (isPortrait ? (10 / 500) : (12 / 900)) * hm * state.infoMarginMult;
      const padLeft   = ref * (isPortrait ? (5  / 500) : (5  / 900)) * wm;
      const vertPad   = padTop * 2.8;
      // rowGapMult lets the user widen/narrow the gap between info lines
      // independently. cardH sums 4×rowGap, so the card always grows/shrinks
      // to fit — the gap can never make lines overlap or clip.
      const rowGap    = ref * (isPortrait ? 0.010 : 0.008) * hm * state.rowGapMult;
      const cardH     = titleRowH + 4 * subRowH + vertPad + 4 * rowGap;

      const cardBot = H * 0.025;
      const cardL   = (W - cardW) / 2;
      const cardGap = cardW * 0.015;

      // Badge — proportional to font sizes (height-driven)
      const logoSize   = fontBadge * 1.8;
      const badgePadH  = fontBadge * 0.55;
      const badgeH     = logoSize + badgePadH * 2;
      const badgePadW  = fontBadge * 0.7;
      const badgeTextW = fontBadge * 9.5;
      const badgeW     = logoSize + badgePadW * 2 + fontBadge * 0.5 + badgeTextW;

      const s = el.style;
      s.setProperty("--card-w",       `${cardW}px`);
      s.setProperty("--card-h",       `${cardH}px`);
      s.setProperty("--card-bottom",  `${cardBot}px`);
      s.setProperty("--card-left",    `${cardL}px`);
      s.setProperty("--card-pad-top", `${padTop}px`);
      s.setProperty("--card-pad-left",`${padLeft}px`);
      s.setProperty("--card-gap",     `${cardGap}px`);
      s.setProperty("--badge-h",      `${badgeH}px`);
      s.setProperty("--badge-w",      `${badgeW}px`);
      s.setProperty("--badge-logo",   `${logoSize}px`);
      s.setProperty("--badge-pad-h",  `${badgePadH}px`);
      s.setProperty("--badge-pad-w",  `${badgePadW}px`);
      s.setProperty("--font-title",   `${fontTitle}px`);
      s.setProperty("--font-sub",     `${fontSub}px`);
      s.setProperty("--font-google",  `${fontGoogle}px`);
      s.setProperty("--google-bottom",`${fontGoogle * 0.35}px`);
      s.setProperty("--google-left",  `${fontGoogle * 0.55}px`);
      s.setProperty("--font-badge",   `${fontBadge}px`);
      s.setProperty("--row-gap",      `${rowGap}px`);
      s.setProperty("--card-radius",  `${state.cardRadius}px`);
    }

    function refreshCardVars() {
      if (!state.hasImage) return;
      applyCardVars(previewWrapper, previewWrapper.offsetWidth, previewWrapper.offsetHeight);
    }

    /* ==================================================================
       OVERLAY UPDATE  — replaces render()
       Just sets text/src on the DOM elements; CSS handles layout/style
       ================================================================== */
    function updateOverlay() {
      const loc = state.location;
      const titleText = loc.title || DEFAULT_LOCATION.title;
      ovTitleText.textContent = titleText;

      const flagVal = (state.flagEmoji || "").trim();
      ovFlagText.style.display = "inline";
      ovFlagText.textContent   = flagVal || FLAG_DEFAULT;

      ovAddress.textContent = loc.address || DEFAULT_LOCATION.address;

      const lat = parseFloat(loc.lat) || DEFAULT_LOCATION.lat;
      const lng = parseFloat(loc.lng) || DEFAULT_LOCATION.lng;
      ovLat.textContent = `Lat ${lat.toFixed(6)}°`;
      ovLng.textContent = `Long ${lng.toFixed(6)}°`;

      const addr2 = (loc.address2 || "").trim();
      if (addr2) {
        // Address 2 filled → show it, lat & lng on one line
        ovAddress2.textContent   = addr2;
        ovAddress2.style.display = "";
        ovCoordsWrap.classList.remove("stacked");
      } else {
        // Address 2 empty → hide it, lat & lng each on own line
        ovAddress2.style.display = "none";
        ovCoordsWrap.classList.add("stacked");
      }

      ovTimestamp.textContent = state.timestamp || TIMESTAMP_DEFAULT;
      ovBadge.textContent     = state.badgeText  || BADGE_DEFAULT;
    }

    /* ==================================================================
       MINI-MAP REFRESH
       ================================================================== */
    async function refreshMiniMap() {
      const lat = parseFloat(state.location.lat);
      const lng = parseFloat(state.location.lng);
      if (!isFinite(lat) || !isFinite(lng)) {
        minimapImg.src = "";
        return;
      }

      geotag_minimap.classList.add("loading");
      try {
        const dataUrl = await buildSatelliteMiniMap(lat, lng, state.mapZoom, state.pinSizeMult);
        minimapImg.src = dataUrl;
      } catch {
        minimapImg.src = "";
      } finally {
        geotag_minimap.classList.remove("loading");
      }
    }

    /* ==================================================================
       NOMINATIM HELPERS
       ================================================================== */
    let geocodeAbortCtrl = null;
    async function reverseGeocode(lat, lng) {
      geocodeAbortCtrl?.abort();
      geocodeAbortCtrl = new AbortController();
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
      const res = await fetch(url, { signal: geocodeAbortCtrl.signal, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("Geocode failed");
      return res.json();
    }

    let searchAbortCtrl = null;
    async function searchLocations(query) {
      searchAbortCtrl?.abort();
      searchAbortCtrl = new AbortController();
      const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}`;
      const res = await fetch(url, { signal: searchAbortCtrl.signal, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("Search failed");
      return res.json();
    }

    /* ==================================================================
       APPLY LOCATION
       ================================================================== */
    function applyLocation(lat, lng, displayName) {
      const parts = displayName.split(",").map(p => p.trim()).filter(Boolean);
      const title = parts.slice(0, 3).join(", ") || displayName;

      state.location = { lat, lng, title, address: displayName, address2: state.location.address2 || "" };

      inpTitle.value   = title;
      inpAddress.value = displayName;
      inpLat.value     = lat;
      inpLng.value     = lng;

      updateOverlay();
      flyMapTo(lat, lng);
      refreshMiniMap();
    }

    function showSearchOverlay() {
      searchOverlay.style.display = "grid";
    }

    /* ==================================================================
       EXPORT  — clones preview-wrapper, applies card vars at the photo's
       natural resolution, then html2canvas captures it. All images are
       dataURLs so there is zero cross-origin taint.
       ================================================================== */
    /* ------------------------------------------------------------------
       GPS decimal → EXIF rational degrees/minutes/seconds
       ------------------------------------------------------------------ */
    function decToExifGPS(dec) {
      const abs = Math.abs(dec);
      const deg = Math.floor(abs);
      const minF = (abs - deg) * 60;
      const min  = Math.floor(minF);
      const sec  = Math.round((minF - min) * 60 * 100);
      return [[deg, 1], [min, 1], [sec, 100]];
    }

    /* ------------------------------------------------------------------
       Parse a timestamp string like "Wednesday, 03/06/26 02:05 AM GMT +05:30"
       into an EXIF DateTime string "YYYY:MM:DD HH:MM:SS"
       ------------------------------------------------------------------ */
    function tsToExifDateTime(ts) {
      try {
        // Extract date part: DD/MM/YY
        const dateMatch = ts.match(/(\d{2})\/(\d{2})\/(\d{2})/);
        const timeMatch = ts.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (!dateMatch || !timeMatch) return null;
        const dy   = dateMatch[1], mo = dateMatch[2];
        const yr   = "20" + dateMatch[3];
        let   hr   = parseInt(timeMatch[1]);
        const mn   = timeMatch[2];
        const ampm = timeMatch[3].toUpperCase();
        if (ampm === "PM" && hr !== 12) hr += 12;
        if (ampm === "AM" && hr === 12) hr = 0;
        return yr + ":" + mo + ":" + dy + " " + String(hr).padStart(2,"0") + ":" + mn + ":00";
      } catch { return null; }
    }

    btnExport.addEventListener("click", async () => {
      if (!state.photoDataUrl) return;
      btnExport.textContent = "Exporting…";
      btnExport.disabled    = true;

      try {
        const natW = previewPhoto.naturalWidth;
        const natH = previewPhoto.naturalHeight;

        // 1. Clone the wrapper
        const clone = previewWrapper.cloneNode(true);
        clone.style.cssText = `
          position: fixed;
          top: -99999px; left: -99999px;
          width: ${natW}px; height: ${natH}px;
          display: block; overflow: visible;
          border-radius: 0; z-index: -1;
        `;

        // 2. Patch all img srcs to dataURLs
        const clonePhoto = clone.querySelector("#preview-photo");
        clonePhoto.src             = state.photoDataUrl;
        clonePhoto.style.width     = "100%";
        clonePhoto.style.height    = "100%";
        clonePhoto.style.objectFit = "cover";
        clonePhoto.style.borderRadius = "0";

        const cloneMinimap = clone.querySelector("#minimap-img");
        if (cloneMinimap && state.minimapDataUrl) cloneMinimap.src = state.minimapDataUrl;

        const cloneBadgeLogo = clone.querySelector("#badge-logo-img");
        if (cloneBadgeLogo && state.badgeLogoDataUrl) {
          cloneBadgeLogo.src = state.badgeLogoDataUrl;
          cloneBadgeLogo.style.display = "block";
        }

        // 3. Apply card vars at full natural resolution
        applyCardVars(clone, natW, natH);

        // 3b. Restore font-related custom properties — the cssText
        // assignment above wipes ALL inline custom props that were set on
        // the live previewWrapper (info text font + Google label font),
        // since applyCardVars() only re-sets sizing vars, not these.
        clone.style.setProperty("--info-font-family",   state.infoFontFamily);
        clone.style.setProperty("--info-font-weight",   state.infoFontWeight);
        clone.style.setProperty("--google-font-family", state.googleFont);
        clone.style.setProperty("--google-font-weight", state.googleFontWeight);

        document.body.appendChild(clone);
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

        // 4. Capture to canvas
        const cvs = await html2canvas(clone, {
          useCORS: false, allowTaint: true,
          scale: 1, width: natW, height: natH,
          backgroundColor: null, logging: false, imageTimeout: 0,
        });
        document.body.removeChild(clone);

        // 5. Get JPEG data URL from canvas
        let jpegDataUrl = cvs.toDataURL("image/jpeg", 0.95);

        // 6. Inject EXIF metadata using piexifjs
        try {
          const lat    = parseFloat(state.location.lat);
          const lng    = parseFloat(state.location.lng);
          const exifDt = tsToExifDateTime(state.timestamp);

          const exifObj = {
            "0th": {
              [piexif.ImageIFD.Make]:             "GeoTag Studio",
              [piexif.ImageIFD.Software]:         "GeoTag Studio",
              [piexif.ImageIFD.ImageDescription]: state.location.address || "",
            },
            "Exif": {},
            "GPS": {
              [piexif.GPSIFD.GPSLatitudeRef]:  lat >= 0 ? "N" : "S",
              [piexif.GPSIFD.GPSLatitude]:     decToExifGPS(lat),
              [piexif.GPSIFD.GPSLongitudeRef]: lng >= 0 ? "E" : "W",
              [piexif.GPSIFD.GPSLongitude]:    decToExifGPS(lng),
              [piexif.GPSIFD.GPSMapDatum]:     "WGS-84",
            },
            "1st": {},
            "thumbnail": null,
          };

          if (exifDt) {
            exifObj["0th"][piexif.ImageIFD.DateTime]       = exifDt;
            exifObj["Exif"][piexif.ExifIFD.DateTimeOriginal]  = exifDt;
            exifObj["Exif"][piexif.ExifIFD.DateTimeDigitized] = exifDt;
          }

          const exifBytes = piexif.dump(exifObj);
          jpegDataUrl     = piexif.insert(exifBytes, jpegDataUrl);
        } catch (exifErr) {
          console.warn("EXIF embedding failed (non-fatal):", exifErr);
        }

        // 7. Download
        const link     = document.createElement("a");
        link.href      = jpegDataUrl;
        link.download  = "geotag-card.jpg";
        link.click();

      } catch(e) {
        console.error("Export failed:", e);
        alert("Export failed — check the browser console for details.");
      } finally {
        btnExport.textContent = "↓ Export PNG";
        btnExport.disabled    = false;
      }
    });

    /* ==================================================================
       EVENT HANDLERS
       ================================================================== */

    // Shared upload handler — used by the hidden <input type=file>, by clicking
    // the canvas area, and by dragging a photo onto it.
    function handleImageFile(file) {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const dataUrl = ev.target.result;
        state.photoDataUrl = dataUrl;
        previewPhoto.onload = () => {
          emptyState.style.display     = "none";
          previewWrapper.style.display = "block";
          btnExport.disabled           = false;
          state.hasImage = true;
          canvasPanel.classList.remove("no-image");
          requestAnimationFrame(() => {
            refreshCardVars();
            updateOverlay();
            refreshMiniMap();
          });
        };
        previewPhoto.src = dataUrl;
      };
      reader.readAsDataURL(file);
    }

    // Main image upload (via the hidden file input, triggered by the toolbar button)
    const fileInputEl = document.getElementById("file-input");
    fileInputEl.addEventListener("change", e => {
      handleImageFile(e.target.files?.[0]);
      e.target.value = ""; // allow re-selecting the same file later
    });

    // Click-to-upload: clicking anywhere in the canvas area opens the file
    // picker, as long as no image has been loaded yet.
    const canvasPanel = document.getElementById("canvas-panel");
    canvasPanel.addEventListener("click", () => {
      if (state.hasImage) return;
      fileInputEl.click();
    });

    // Drag-and-drop upload onto the same area.
    ["dragenter", "dragover"].forEach(evt => {
      canvasPanel.addEventListener(evt, e => {
        if (state.hasImage) return;
        e.preventDefault();
        canvasPanel.classList.add("drag-active");
      });
    });
    ["dragleave", "dragend"].forEach(evt => {
      canvasPanel.addEventListener(evt, () => canvasPanel.classList.remove("drag-active"));
    });
    canvasPanel.addEventListener("drop", e => {
      e.preventDefault();
      canvasPanel.classList.remove("drag-active");
      if (state.hasImage) return;
      handleImageFile(e.dataTransfer.files?.[0]);
    });

    // Re-apply card vars on window resize so preview stays consistent
    window.addEventListener("resize", () => refreshCardVars());

    // Badge logo upload
    document.getElementById("badge-logo-input").addEventListener("change", e => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const dataUrl = ev.target.result;
        state.badgeLogoDataUrl = dataUrl;
        badgeLogoImg.onload = () => {
          badgeLogoEl.classList.add("has-logo");
          document.getElementById("badge-logo-label").textContent = "Replace badge logo";
        };
        badgeLogoImg.src = dataUrl;
      };
      reader.readAsDataURL(file);
    });

    // Metadata inputs
    inpTitle.addEventListener("input",     e => { state.location.title    = e.target.value; updateOverlay(); });
    inpFlag.addEventListener("input",      e => { state.flagEmoji         = e.target.value; updateOverlay(); });
    inpAddress.addEventListener("input",   e => { state.location.address  = e.target.value; updateOverlay(); });
    inpAddress2.addEventListener("input",  e => { state.location.address2 = e.target.value; updateOverlay(); });
    inpTimestamp.addEventListener("input", e => { state.timestamp         = e.target.value; updateOverlay(); });
    inpBadge.addEventListener("input",     e => { state.badgeText         = e.target.value; updateOverlay(); });

    inpLat.addEventListener("input", e => {
      state.location.lat = e.target.value;
      updateOverlay();
      refreshMiniMap();
      flyMapTo(parseFloat(e.target.value) || DEFAULT_LOCATION.lat, parseFloat(inpLng.value) || DEFAULT_LOCATION.lng);
    });
    inpLng.addEventListener("input", e => {
      state.location.lng = e.target.value;
      updateOverlay();
      refreshMiniMap();
      flyMapTo(parseFloat(inpLat.value) || DEFAULT_LOCATION.lat, parseFloat(e.target.value) || DEFAULT_LOCATION.lng);
    });

    // Map click
    map.on("click", async e => {
      showSearchOverlay();
      const lat = parseFloat(e.latlng.lat.toFixed(6));
      const lng = parseFloat(e.latlng.lng.toFixed(6));

      marker.setLatLng([lat, lng]);
      inpLat.value = lat;
      inpLng.value = lng;
      state.location.lat = lat;
      state.location.lng = lng;
      updateOverlay();
      refreshMiniMap();

      pickerStatus.textContent = "Looking up place…";
      state.geocodeLoading = true;
      try {
        const result = await reverseGeocode(lat, lng);
        applyLocation(lat, lng, result.display_name || `${lat}, ${lng}`);
      } catch (err) {
        if (err.name !== "AbortError") applyLocation(lat, lng, `${lat}, ${lng}`);
      } finally {
        state.geocodeLoading     = false;
        pickerStatus.textContent = "Click map to set location";
      }
    });

    // Search
    async function handleSearch() {
      const query = searchInput.value.trim();
      if (!query) return;
      showSearchOverlay();
      btnSearch.textContent = "…";
      btnSearch.disabled    = true;
      try {
        const results       = await searchLocations(query);
        state.searchResults = results.slice(0, 5);
        renderSearchResults();
      } catch (err) {
        if (err.name !== "AbortError") { state.searchResults = []; renderSearchResults(); }
      } finally {
        btnSearch.textContent = "Go";
        btnSearch.disabled    = false;
      }
    }

    btnSearch.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", e => { if (e.key === "Enter") handleSearch(); });

    function renderSearchResults() {
      searchResults.innerHTML = "";
      if (!state.searchResults.length) { searchResults.style.display = "none"; return; }
      state.searchResults.forEach(result => {
        const btn   = document.createElement("button");
        btn.type    = "button";
        btn.className = "search-result";
        btn.textContent = result.display_name;
        btn.addEventListener("click", () => {
          const lat = parseFloat(parseFloat(result.lat).toFixed(6));
          const lng = parseFloat(parseFloat(result.lon).toFixed(6));
          searchInput.value           = result.display_name;
          state.searchResults         = [];
          searchResults.style.display = "none";
          applyLocation(lat, lng, result.display_name);
        });
        searchResults.appendChild(btn);
      });
      searchResults.style.display = "grid";
    }

    document.addEventListener("click", e => {
      if (!searchOverlay.contains(e.target)) {
        state.searchResults         = [];
        searchResults.style.display = "none";
      }
    });

    document.getElementById("picker-map").addEventListener("mousedown", showSearchOverlay);

    // Map zoom slider
    const inpZoom   = document.getElementById("inp-zoom");
    const zoomValue = document.getElementById("zoom-value");
    inpZoom.addEventListener("input", e => {
      state.mapZoom    = parseInt(e.target.value);
      zoomValue.textContent = e.target.value;
      refreshMiniMap();
    });

    // Card roundness slider
    const inpCardRoundness   = document.getElementById("inp-card-roundness");
    const cardRoundnessValue = document.getElementById("card-roundness-value");
    inpCardRoundness.addEventListener("input", e => {
      state.cardRadius = parseFloat(e.target.value);
      cardRoundnessValue.textContent = state.cardRadius + "px";
      if (state.hasImage) refreshCardVars();
    });

    // Info field gap slider
    const inpInfoGap   = document.getElementById("inp-info-gap");
    const infoGapValue = document.getElementById("info-gap-value");
    inpInfoGap.addEventListener("input", e => {
      state.rowGapMult = parseFloat(e.target.value);
      infoGapValue.textContent = state.rowGapMult.toFixed(2) + "×";
      if (state.hasImage) refreshCardVars();
    });

    // Info area top/bottom margin slider — grows the card's top/bottom
    // padding around the text block. cardH is derived from this value too,
    // so the card always expands to fit — no clipping or overlap.
    const inpInfoMargin   = document.getElementById("inp-info-margin");
    const infoMarginValue = document.getElementById("info-margin-value");
    inpInfoMargin.addEventListener("input", e => {
      state.infoMarginMult = parseFloat(e.target.value);
      infoMarginValue.textContent = state.infoMarginMult.toFixed(2) + "×";
      if (state.hasImage) refreshCardVars();
    });

    // Generic clickable "card grid" selector (replaces <select> dropdowns).
    // Clicking a card marks it active, un-marks its siblings, and fires onSelect
    // with that card's data-value.
    function setupCardGroup(gridId, onSelect) {
      const grid = document.getElementById(gridId);
      if (!grid) return;
      grid.addEventListener("click", e => {
        const btn = e.target.closest(".font-card");
        if (!btn || !grid.contains(btn)) return;
        grid.querySelectorAll(".font-card").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        onSelect(btn.dataset.value);
      });
    }

    // Info field font (family + weight combined, e.g. "'DM Sans', sans-serif::300")
    setupCardGroup("info-font-grid", value => {
      const [family, weight] = value.split("::");
      state.infoFontFamily = family;
      state.infoFontWeight = parseInt(weight, 10);
      previewWrapper.style.setProperty("--info-font-family", state.infoFontFamily);
      previewWrapper.style.setProperty("--info-font-weight", state.infoFontWeight);
    });

    // Google label font family
    setupCardGroup("google-font-grid", value => {
      state.googleFont = value;
      previewWrapper.style.setProperty("--google-font-family", state.googleFont);
    });

    // Google label font weight
    setupCardGroup("google-weight-grid", value => {
      state.googleFontWeight = parseInt(value, 10);
      previewWrapper.style.setProperty("--google-font-weight", state.googleFontWeight);
    });

    // Minimap pin size
    const inpPinSize   = document.getElementById("inp-pin-size");
    const pinSizeValue = document.getElementById("pin-size-value");
    inpPinSize.addEventListener("input", e => {
      state.pinSizeMult = parseFloat(e.target.value);
      pinSizeValue.textContent = state.pinSizeMult.toFixed(2) + "×";
      refreshMiniMap();
    });

    // Collapsible "Customization Settings" section
    const btnExtraToggle = document.getElementById("btn-extra-toggle");
    const extraSettings  = document.getElementById("extra-settings");
    btnExtraToggle.addEventListener("click", () => {
      const isOpen = extraSettings.style.display !== "none";
      extraSettings.style.display = isOpen ? "none" : "grid";
      btnExtraToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Card width slider
    const inpCardWidth   = document.getElementById("inp-card-width");
    const cardWidthValue = document.getElementById("card-width-value");
    inpCardWidth.addEventListener("input", e => {
      state.cardWidthMult = parseFloat(e.target.value);
      cardWidthValue.textContent = state.cardWidthMult.toFixed(2) + "×";
      if (state.hasImage) refreshCardVars();
    });

    // Card height slider
    const inpCardHeight   = document.getElementById("inp-card-height");
    const cardHeightValue = document.getElementById("card-height-value");
    inpCardHeight.addEventListener("input", e => {
      state.cardHeightMult = parseFloat(e.target.value);
      cardHeightValue.textContent = state.cardHeightMult.toFixed(2) + "×";
      if (state.hasImage) refreshCardVars();
    });

    // Title font size slider
    const inpTitleFont   = document.getElementById("inp-title-font");
    const titleFontValue = document.getElementById("title-font-value");
    inpTitleFont.addEventListener("input", e => {
      state.titleFontMult = parseFloat(e.target.value);
      titleFontValue.textContent = state.titleFontMult.toFixed(2) + "×";
      if (state.hasImage) refreshCardVars();
    });

    // Address/coords/timestamp font size slider
    const inpTextFont   = document.getElementById("inp-text-font");
    const textFontValue = document.getElementById("text-font-value");
    inpTextFont.addEventListener("input", e => {
      state.subFontMult = parseFloat(e.target.value);
      textFontValue.textContent = state.subFontMult.toFixed(2) + "×";
      if (state.hasImage) refreshCardVars();
    });

    /* ==================================================================
       INITIAL MINI-MAP + OVERLAY
       ================================================================== */

    /* ==================================================================
       DATETIME PICKER
       ================================================================== */
    (function() {
      const inp        = document.getElementById("inp-timestamp");
      const openBtn    = document.getElementById("dt-open-btn");
      const popover    = document.getElementById("dt-popover");
      const stepCal    = document.getElementById("dt-step-cal");
      const stepClock  = document.getElementById("dt-step-clock");
      const monthLbl   = document.getElementById("dt-month-label");
      const calGrid    = document.getElementById("dt-cal-grid");
      const prevBtn    = document.getElementById("dt-prev");
      const nextBtn    = document.getElementById("dt-next");
      const clockSvg   = document.getElementById("dt-clock-svg");
      const clockMode  = document.getElementById("dt-clock-mode");
      const timeDisp   = document.getElementById("dt-time-display");
      const amBtn      = document.getElementById("dt-am");
      const pmBtn      = document.getElementById("dt-pm");
      const confirmBtn = document.getElementById("dt-confirm");
      const backBtn    = document.getElementById("dt-back-to-cal");
      const clockIcon  = document.getElementById("dt-clock-icon");

      const MONTHS = ["January","February","March","April","May","June",
                      "July","August","September","October","November","December"];
      const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"];

      const now = new Date();
      let selYear    = now.getFullYear();
      let selMonth   = now.getMonth();
      let selDay     = now.getDate();
      let selHour    = now.getHours() % 12 || 12;
      let selMin     = now.getMinutes();
      let selAMPM    = now.getHours() < 12 ? "AM" : "PM";
      let pickingMin = false;
      let isOpen     = false;

      function pad(n) { return String(n).padStart(2, "0"); }

      function dayName(y, m, d) {
        return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(y,m,d).getDay()];
      }

      function tzString() {
        const off  = -new Date().getTimezoneOffset();
        const sign = off >= 0 ? "+" : "-";
        const h    = Math.floor(Math.abs(off) / 60);
        const mn   = Math.abs(off) % 60;
        return "GMT " + sign + pad(h) + ":" + pad(mn);
      }

      function buildTimestamp() {
        return dayName(selYear, selMonth, selDay) + ", "
          + pad(selDay) + "/" + pad(selMonth + 1) + "/" + String(selYear).slice(-2) + " "
          + pad(selHour) + ":" + pad(selMin) + " " + selAMPM + " " + tzString();
      }

      /* ── Calendar ─────────────────────────────────────────────────── */
      function showCal() {
        stepCal.style.display   = "block";
        stepClock.style.display = "none";
        pickingMin = false;
        renderCal();
      }

      function showClock() {
        stepCal.style.display   = "none";
        stepClock.style.display = "flex";
        pickingMin = false;
        renderClock();
      }

      function renderCal() {
        monthLbl.textContent = MONTHS[selMonth] + " " + selYear;
        calGrid.innerHTML    = "";
        DAYS.forEach(d => {
          const h = document.createElement("div");
          h.className = "dt-day-hdr"; h.textContent = d; calGrid.appendChild(h);
        });
        const first = new Date(selYear, selMonth, 1).getDay();
        const total = new Date(selYear, selMonth + 1, 0).getDate();
        for (let i = 0; i < first; i++) {
          const b = document.createElement("div");
          b.className = "dt-day empty"; calGrid.appendChild(b);
        }
        for (let d = 1; d <= total; d++) {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "dt-day" + (d === selDay ? " selected" : "");
          b.textContent = d;
          b.addEventListener("click", () => {
            selDay = d;
            showClock();
          });
          calGrid.appendChild(b);
        }
      }

      prevBtn.addEventListener("click", e => {
        e.stopPropagation();
        selMonth--; if (selMonth < 0) { selMonth = 11; selYear--; } renderCal();
      });
      nextBtn.addEventListener("click", e => {
        e.stopPropagation();
        selMonth++; if (selMonth > 11) { selMonth = 0; selYear++; } renderCal();
      });

      /* ── Clock ────────────────────────────────────────────────────── */
      const R = 100, CR = 72, NUM_R = 66;

      function angleToPt(deg) {
        const rad = (deg - 90) * Math.PI / 180;
        return { x: R + CR * Math.cos(rad), y: R + CR * Math.sin(rad) };
      }

      function renderClock() {
        clockMode.textContent = pickingMin ? "selecting minute" : "selecting hour";

        const handVal   = pickingMin ? selMin : (selHour % 12 || 12);
        const handTotal = pickingMin ? 60 : 12;
        const handDeg   = (handVal / handTotal) * 360;
        const hp        = angleToPt(handDeg);

        let svg = '';
        // face
        svg += '<circle cx="' + R + '" cy="' + R + '" r="' + R + '" fill="#0d1628"/>';
        // tick marks
        for (let i = 0; i < 60; i++) {
          const deg = (i / 60) * 360 - 90;
          const rad = deg * Math.PI / 180;
          const isMajor = i % 5 === 0;
          const r1 = isMajor ? R - 8 : R - 4;
          const r2 = R - 1;
          svg += '<line x1="' + (R + r1 * Math.cos(rad)) + '" y1="' + (R + r1 * Math.sin(rad)) + '"'
               + ' x2="' + (R + r2 * Math.cos(rad)) + '" y2="' + (R + r2 * Math.sin(rad)) + '"'
               + ' stroke="rgba(255,255,255,' + (isMajor ? '0.2' : '0.08') + ')" stroke-width="' + (isMajor ? '1.5' : '1') + '"/>';
        }
        // hand line
        svg += '<line x1="' + R + '" y1="' + R + '" x2="' + hp.x + '" y2="' + hp.y + '"'
             + ' stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>';
        // center dot
        svg += '<circle cx="' + R + '" cy="' + R + '" r="4" fill="var(--accent)"/>';
        // hand end dot
        svg += '<circle cx="' + hp.x + '" cy="' + hp.y + '" r="12" fill="var(--accent)" fill-opacity="0.9"/>';

        // numbers
        for (let i = 0; i < 12; i++) {
          const num    = pickingMin ? i * 5 : (i === 0 ? 12 : i);
          const deg    = (i / 12) * 360;
          const pt     = angleToPt(deg);
          const active = pickingMin ? (selMin === num) : ((selHour % 12 || 12) === num);
          svg += '<text x="' + pt.x + '" y="' + pt.y + '" text-anchor="middle" dominant-baseline="central"'
               + ' font-size="14" font-weight="' + (active ? "700" : "400") + '"'
               + ' fill="' + (active ? "#000" : "rgba(255,255,255,0.75)") + '"'
               + ' font-family="DM Sans,sans-serif">' + pad(num) + '</text>';
        }

        clockSvg.innerHTML = svg;
        timeDisp.textContent = pad(selHour) + ":" + pad(selMin) + " " + selAMPM;
        amBtn.classList.toggle("active", selAMPM === "AM");
        pmBtn.classList.toggle("active", selAMPM === "PM");
      }

      clockSvg.addEventListener("click", e => {
        // Use SVG coordinate space directly
        const svgEl   = clockSvg;
        const pt      = svgEl.createSVGPoint();
        pt.x = e.clientX; pt.y = e.clientY;
        const svgPt   = pt.matrixTransform(svgEl.getScreenCTM().inverse());
        const dx      = svgPt.x - R;
        const dy      = svgPt.y - R;
        let angle     = Math.atan2(dy, dx) * 180 / Math.PI + 90;
        if (angle < 0) angle += 360;

        if (!pickingMin) {
          let h = Math.round(angle / 30) % 12;
          if (h === 0) h = 12;
          selHour    = h;
          pickingMin = true;
        } else {
          selMin     = Math.round(angle / 6) % 60;
          pickingMin = false;
        }
        renderClock();
      });

      amBtn.addEventListener("click",  e => { e.stopPropagation(); selAMPM = "AM"; renderClock(); });
      pmBtn.addEventListener("click",  e => { e.stopPropagation(); selAMPM = "PM"; renderClock(); });
      backBtn.addEventListener("click",e => { e.stopPropagation(); showCal(); });

      // Clock icon in timestamp field re-opens clock step
      if (clockIcon) {
        clockIcon.addEventListener("click", e => {
          e.stopPropagation();
          popover.style.display = "block";
          isOpen = true;
          showClock();
        });
      }

      confirmBtn.addEventListener("click", e => {
        e.stopPropagation();
        const ts = buildTimestamp();
        inp.value        = ts;
        state.timestamp  = ts;
        updateOverlay();
        closePicker();
      });

      /* ── Open / close ─────────────────────────────────────────────── */
      // Stop all clicks inside the popover from bubbling to document
      popover.addEventListener("click", e => e.stopPropagation());

      function openPicker() {
        isOpen = true;
        popover.style.display = "block";
        showCal();
      }

      function closePicker() {
        isOpen = false;
        popover.style.display = "none";
      }

      openBtn.addEventListener("click", e => { e.stopPropagation(); isOpen ? closePicker() : openPicker(); });

      // Clicking the text field only opens if it isn't already open and user isn't typing
      inp.addEventListener("mousedown", e => {
        if (!isOpen) { e.preventDefault(); openPicker(); }
      });

      // Manual typing always works — just update overlay
      inp.addEventListener("input", e => { state.timestamp = e.target.value; updateOverlay(); });
      inp.addEventListener("keydown", () => { closePicker(); });
    })();


    updateOverlay();
    refreshMiniMap();
