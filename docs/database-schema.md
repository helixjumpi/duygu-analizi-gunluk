# Veritabanı Şeması

## Users Collection

* `_id`: MongoDB tarafından otomatik olarak oluşturulan benzersiz kimlik.
* `email`: Kullanıcının e-posta adresi (benzersiz).
* `password`: Kullanıcının şifresi (hashlenmiş).
* `name`: Kullanıcının adı.
* `surname`: Kullanıcının soyadı.
* `createdAt`: Kayıt tarihi.
* `updatedAt`: Son güncelleme tarihi.

## Journals Collection

* `_id`: MongoDB tarafından otomatik olarak oluşturulan benzersiz kimlik.
* `userId`: Kullanıcı ID'si (Users collection'ına referans).
* `date`: Günlük tarihi.
* `text`: Günlük metni.
* `sentimentScore`: Duygu puanı.
* `createdAt`: Oluşturulma tarihi.
* `updatedAt`: Son güncelleme tarihi.

## MoodContents Collection

* `_id`: MongoDB tarafından otomatik olarak oluşturulan benzersiz kimlik.
* `sentimentRange`: Duygu puanı aralığı.
* `content`: Moral içeriği.
* `contentType`: İçerik tipi.

## Tartışma Noktaları

* `sentimentScore` alanı daha detaylı tutulmalı mı?
* `MoodContents` içerik tipleri ve kaynakları nasıl yönetilmeli?
* Günlükler kategorilere ayrılmalı mı?
